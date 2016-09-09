FROM node:argon

MAINTAINER Sebastian Perez

ENV TERM=xterm
RUN apt-get update
RUN apt-get install -y nano

ADD ./npm-installs.sh ./
RUN ./npm-installs.sh

ADD ./app /usr/src/app

ENV APP=/usr/src/app
WORKDIR $APP

RUN npm install

ENTRYPOINT ["npm", "start"]
