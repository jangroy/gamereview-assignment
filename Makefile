.PHONY: test up down docker-push

USERNAME := jangroy91
PROJNAME := gamereview-api

test:
	docker build -t $(USERNAME)/$(PROJNAME):test \
               -f docker/test.Dockerfile .
	docker run --rm $(USERNAME)/$(PROJNAME):test

up:
	docker-compose --project-name $(PROJNAME) \
                 -f docker/docker-compose.yml up -d

down:
	docker-compose --project-name $(PROJNAME) \
                 -f docker/docker-compose.yml down