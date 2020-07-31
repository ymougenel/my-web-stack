### BUILD STAGE
FROM node:12.16.3-alpine AS build
WORKDIR /usr/src/app
COPY ./front-stack/package.json ./
RUN npm install
COPY ./front-stack/ ./
RUN ls -la ./
RUN ls -la ./src
RUN npm install -g @angular/cli@1.2.6
RUN ng build --prod
#RUN ng build --prod  --deploy-url 'bga/'


### WEB SERVER STAGE
FROM nginx:1.17.9-alpine

COPY ./front-stack/docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./front-stack/docker/nginx.conf /etc/nginx/conf.d/

RUN rm -rf /usr/share/nginx/html/*

COPY  --from=build /usr/src/app/dist/  /usr/share/nginx/html/
