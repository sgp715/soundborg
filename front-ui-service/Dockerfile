FROM node:argon

MAINTAINER Sebastian Perez

ADD ./npm-installs.sh ./
#RUN chmod +x ./script/npm-installs.sh
RUN ./npm-installs.sh

ADD ./package.json /usr/src

ADD ./app /usr/src/app

ENV SRC=/usr/src
WORKDIR $SRC

RUN npm install

ENTRYPOINT ["npm", "start"]
