.PHONY: build-image docker-start docker-end

build-image:
	docker build -f Dockerfile.webapp -t ihr-webapp .

docker-start:
	docker-compose up -d

docker-end:
	docker-compose down -v
