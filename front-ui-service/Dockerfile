FROM node:argon

MAINTAINER Sebastian Perez

ADD ./app /usr/src/app
ENV APP=/usr/src/app
WORKDIR $APP

RUN npm install

ENTRYPOINT ["npm", "start", "app.js"]
