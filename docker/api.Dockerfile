FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN yarn && yarn build

CMD ["yarn", "start"]