# Game Review Blog - Take Home Assignment

## Running on Local Machine

Run `make up` in the command line at project root.

Note: 
- This will run `docker-compose.yml up -d` located in `docker` directory based on `api.Dockerfile`. 
- During build, the in memory database file will be created and seed the database with fake data for this assignment purposes.

### Running tests

Test with `make test`

Note: 
- Only runs route unit tests at the moment. 
- Basic code coverage displayed.

## Using the docker hub repository

Feel free to pull from the DockerHub repo `docker pull jangroy91/gamereview-api:latest`

## Interacting with the backend API

Server will be live at `localhost:3001`

- You can use `curl -X (GET|POST|PUT|DELETE) $(hostname):3001/api/`
- Or make HTTP requests with [Postman](https://www.postman.com/).

Endpoints:

- GET, POST `/api/posts`
  - POST will take query parameters `author, article, and title`
- GET, PUT, DELETE `/api/posts/:id`
  - PUT will take query parameters `author, article, and/or title`
- GET, POST `/api/comments`
  - POST will take query parameters `author, comment, and post_id`
- GET, PUT, DELETE `/api/comments/:id`
  - PUT will take query parameters `author, comment, and/or post_id`

## CI and CD

Travis CI is integrated into this project and will trigger tests when code is pushed into `dev` branch. Once tests pass, it will build new docker image tagged `:latest` and push it to my docker hub repository.

Automated CD is currently a work in progress.

## Some things to add

- [ ] Automate git merge and deployment to a hosting service (Heroku, AWS, etc)
- [ ] Controllers testing at the database layer
- [ ] Make an interactive frontend that utilizes the api endpoints
- [ ] Implement E2E testing when frontend is developed
- [ ] Reverse Proxy port into a readable subdomain with [traefik](https://docs.traefik.io/)
