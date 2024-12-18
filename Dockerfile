FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install
RUN npm install chart.js
RUN npm install ngx-pagination



CMD ["ng", "serve", "--host", "0.0.0.0"]
