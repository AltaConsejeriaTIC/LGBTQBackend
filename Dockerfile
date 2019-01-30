FROM node:8

WORKDIR /usr/src/app

RUN npm install -g swagger
RUN npm install -g knex

COPY . .

RUN npm install

EXPOSE 8080

CMD [ "swagger", "project", "start" ]
