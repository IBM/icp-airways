FROM ubuntu:latest
RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential 
WORKDIR /usr/src/app
COPY . .
RUN pip install -r requirements.txt
EXPOSE 5671 5672
RUN chmod +x run.sh

ENTRYPOINT [ "./run.sh" ]