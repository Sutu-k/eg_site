#!/bin/sh

echo "📦 Installation des dépendances Composer..."
composer install || exit 1

echo "📦 Installation des dépendances node..."
bun install || exit 1

echo "🚀 Tentative d'exécution des migrations Laravel..."

TRIES=0
MAX_RETRIES=10
SUCCESS=0

while [ $TRIES -lt $MAX_RETRIES ]; do
  if php artisan migrate --force; then
    echo "✅ Migrations réussies"
    SUCCESS=1
    break
  else
    echo "❌ Échec des migrations, tentative $((TRIES+1))/$MAX_RETRIES..."
    sleep 5
    TRIES=$((TRIES+1))
  fi
done

if [ $SUCCESS -ne 1 ]; then
  echo "❌ Échec total des migrations après $MAX_RETRIES tentatives. Arrêt du conteneur."
  exit 1
fi

echo "🔗 Création du lien de stockage..."
php artisan storage:link || exit 1

echo "⚡ Optimisation de Laravel..."
php artisan optimize || exit 1

echo "👤 Mise à jour des permissions..."
chown -R www-data:www-data /app || exit 1

echo "✅ Démarrage du serveur Laravel en développement..."

# Démarrer supervisord pour gérer PHP-FPM et Nginx
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
