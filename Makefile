.PHONY: build-image docker-start docker-end

build-image:
	docker build -f Dockerfile.webapp -t ihr-webapp .

docker-start:
	docker-compose -f docker-compose.unix.yml up -d

docker-end:
	docker-compose -f docker-compose.unix.yml down -v
