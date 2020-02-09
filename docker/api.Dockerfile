FROM node:lts-alpine

WORKDIR /app
#ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/package.json

WORKDIR /app
RUN npm install --silent

CMD ["npm", "run", "start"]
