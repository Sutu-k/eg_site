#!/bin/sh

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

echo "🔗 Vérification et création du lien de stockage..."
if [ ! -L /app/public/storage ]; then
  php artisan storage:link
fi

echo "🔧 Vérification des dossiers de cache..."
# TODO: à voir si ce block est nécessaire
mkdir -p /app/storage/framework/views
mkdir -p /app/storage/framework/sessions
mkdir -p /app/storage/framework/cache
chmod -R 777 /app/storage/framework
chown -R www-data:www-data /app/storage/framework

echo "⚡ Optimisation de Laravel..."
php artisan optimize || exit 1

echo "👤 Mise à jour des permissions..."
chown -R www-data:www-data /app || exit 1

echo "✅ Démarrage du serveur Laravel en production..."

# Démarrer supervisord pour gérer PHP-FPM et Nginx
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
