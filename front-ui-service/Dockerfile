FROM node:argon

MAINTAINER Sebastian Perez

ADD ./npm-installs.sh ./
RUN ./npm-installs.sh

ADD ./app /usr/src/app

ENV APP=/usr/src/app
WORKDIR $APP

RUN npm install

ENTRYPOINT ["npm", "start"]
