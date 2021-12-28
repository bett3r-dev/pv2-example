FROM node:alpine

WORKDIR /app

COPY ./build .
COPY package.json .

RUN npm i

