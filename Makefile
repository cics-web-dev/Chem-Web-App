up: 
	docker compose -f "docker-compose.dev.yml" up -d --build

up-frontend: 
	docker compose  -f "docker-compose.dev.yml" up -d --build frontend 

up-backend: 
	docker compose  -f "docker-compose.dev.yml" up -d --build backend 

down: 
	docker compose -f "docker-compose.dev.yml" down
