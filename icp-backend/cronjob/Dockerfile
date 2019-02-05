FROM ubuntu:latest
COPY . .
RUN apt-get update \
    && apt-get --no-install-recommends -y install \
    siege
RUN chmod +x run.sh
CMD [ "sh","run.sh" ]