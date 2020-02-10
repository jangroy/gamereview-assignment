FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN yarn

CMD ["yarn", "test"]

# reviewed by EA
# 1. git pull
# 2. dockcompose prod
#   - npm install, build dist, yarn run start
# 3. dockcompose test
#   - npm install, yarn run test

# https://blog.travis-ci.com/2019-05-30-setting-up-a-ci-cd-process-on-github
# travis pipeline
# 1. [CI] commit dev branch
#   - travis triggers
#       - git pull from dev branch, code is new code
#       - make test, runs docker-compose up and yarn test
#       - once succeded, docker build and docker push :latest create pull request to master, docker build and push
#       - trigger heroku to download new image and rerun

# sqlite file will be made during...
# - exists inside git repo
#   should be easy to copy over
# - while compiling
#   need to manually copy via cp db db
# - while docker builds
#   - copy package.json
#   - run

# travis will run npm build every time there is a commit, and then run tests on it, if they pass? add pull request to master