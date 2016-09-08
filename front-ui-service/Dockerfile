FROM node:argon

MAINTAINER Sebastian Perez

ADD ./ ./npm-installs.sh
CMD ["npm-installs.sh"]

ADD ./package.json /usr/src

ADD ./app /usr/src/app

ENV SRC=/usr/src
WORKDIR $SRC

RUN npm install

ENTRYPOINT ["npm", "start"]
