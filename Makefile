.PHONY: build-image docker-start docker-end

build-image:
	docker build -f Dockerfile.webapp -t ihr-webapp .

docker-start:
	docker-compose -f docker-compose.unix.yml up -d

docker-end:
	docker-compose -f docker-compose.unix.yml down -v

create-user:
	docker exec ihr-mongo mongo ihr -u talus -p ihr1234 --eval "db.createUser({user: 'ihr', pwd: 'ihr14a1bc', roles:[{role: 'readWrite', db: 'ihr'}]})" --authenticationDatabase admin
