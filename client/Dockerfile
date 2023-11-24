
ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION}-alpine as client

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci -qy

COPY . .

EXPOSE 3000

CMD ["npm", "start"]