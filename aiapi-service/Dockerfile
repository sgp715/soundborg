FROM python:3.5.2

MAINTAINER Sebastian Perez

RUN mkdir /usr/src/storage
RUN mkdir /usr/src/storage/songs
RUN mkdir /usr/src/storage/remix

ADD ./aiapi /usr/src/aiapi
ENV AIAPI=/usr/src/aiapi

ADD ./requirements.txt .
RUN pip3 install -r requirements.txt

WORKDIR $AIAPI
ENTRYPOINT ["python3", "server.py"]
