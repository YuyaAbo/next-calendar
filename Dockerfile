FROM node:14

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./
RUN yarn --pure-lockfile

COPY . .
RUN yarn run build

EXPOSE 3000
