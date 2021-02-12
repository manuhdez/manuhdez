---
title: Blog microservices
size: normal
highlight: true
order: 0
category: fullstack
code_url: https://github.com/manuhdez/microservices-blog
short_description: Project for a microservices course handling all services manually with docker and kubernetes.
tags:
  - typescript
  - docker
  - kubernetes
  - nodejs
  - express
  - react
---

## Description

As part of the [course](https://www.udemy.com/course/microservices-with-node-js-and-react/) program, I developed a small blog-like app to practice the concepts around microservices and its architechture.

## Services

The following services were created for this project:

- A service to store all the posts
- A service to store all the comments
- A query service where the front gets the data of the posts with embeded comments
- A moderation service that validates every comment automatically
- An event bus to receive and redirect events from all other services

## Docker

For every service a docker image whas created and pushed to dockerhub in order to be able to pull them with kubernetes.

```Dockerfile
FROM node:alpine

WORKDIR /app
COPY ./ ./
RUN npm install

CMD [ "npm", "run", "dev" ]
```

## Kubernetes

For each microservice a deployment setup was created with a ClusterIP that enables interconection between each other.
Finally, the application is orchestrated within a cluster receiving requests into an nginx ingress controller redirecting the traffic into the correspondant microservice.
