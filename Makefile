.PHONY: help up down build start stop restart logs composer artisan bun

# Colors
GREEN  := $(shell tput -Txterm setaf 2)
YELLOW := $(shell tput -Txterm setaf 3)
WHITE  := $(shell tput -Txterm setaf 7)
RESET  := $(shell tput -Txterm sgr0)

## Show this help
help:
	@echo ''
	@echo '${YELLOW}Usage:${RESET}'
	@echo '  ${YELLOW}make${RESET} ${GREEN}<target>${RESET}'
	@echo ''
	@echo '${YELLOW}Targets:${RESET}'
	@awk '/^[a-zA-Z\-\_0-9]+:/ { \
		helpMessage = match(lastLine, /^## (.*)/); \
		if (helpMessage) { \
			helpCommand = substr($$1, 0, index($$1, ":")-1); \
			helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
			printf "  ${GREEN}%-20s${RESET} ${WHITE}%s${RESET}\n", helpCommand, helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)
	@echo ''

## Start all containers in detached mode
up:
	docker compose up -d

## Stop and remove all containers
down:
	docker compose down

## Build or rebuild services
build:
	docker compose build

## Start existing containers
start:
	docker compose start

## Stop running containers
stop:
	docker compose stop

## Restart all services
restart:
	docker compose restart

## Follow container logs
logs:
	docker compose logs -f

## Install dependencies
install:
	docker compose exec app composer install
	docker compose exec app bun install

## Migrate the database
migrate:
	docker compose exec app php artisan migrate

## Seed the database
seed:
	docker compose exec app php artisan db:seed

## Drop and create the database
fresh:
	docker compose exec app php artisan migrate:fresh --seed

## Tinker with the database
tinker:
	docker compose exec app php artisan tinker

## Generate TypeScript types from Laravel models
types:
	docker compose exec app php artisan typescript:transform

## Run Vite dev server
dev:
	docker compose exec app bun run dev

## Build assets for production
build-assets:
	docker compose exec app bun run build

## Run TypeScript type checking
check-types:
	docker compose exec app bun run type-check

## Open bash in the app container
bash:
	docker compose exec app sh

ccache:
	docker compose exec app php artisan optimize:clear

## Check Redis connection
check-redis:
	docker compose exec app php scripts/check-redis.php

## Show nginx errors
nginx-errors:
	docker compose exec app nginx -t
	docker compose exec app cat /var/log/nginx/error.log

up-prod: ## Démarre les conteneurs en mode production (DOCKER_BUILDKIT=0)
	docker compose -f compose.prod.test.yml down -v
	docker compose -f compose.prod.test.yml build #--no-cache
	docker compose -f compose.prod.test.yml --profile local up -d

down-prod: ## Arrête les conteneurs en mode production
	docker compose -f compose.prod.test.yml down

## Tests
tests: ## Exécute les tests PHPUnit
	docker compose exec app php artisan test

bun-build:
	docker compose exec app bun run build

ide-helper-actions:
	docker compose exec app php artisan ide-helper:actions
