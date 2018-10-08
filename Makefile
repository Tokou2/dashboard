all:
	docker-compose build

run:
	docker-compose up

rundev:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

install:
	npm install --quiet

.PHONY: all run install
