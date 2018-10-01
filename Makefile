all:
	docker-compose build

run:
	docker-compose up

install:
	npm install --quiet

.PHONY: all run install
