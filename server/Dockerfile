# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION}-alpine

COPY package*.json ./

RUN npm ci -qy

COPY . .

EXPOSE 8080

CMD ["npm", "start"]