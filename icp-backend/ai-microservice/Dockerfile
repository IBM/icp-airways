FROM node:9.8.0
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3005
RUN npm i -g webpack webpack-cli
RUN npm link webpack
RUN webpack-cli
RUN groupadd -g 999 appuser && \
    useradd -r -u 999 -g appuser appuser
USER appuser
CMD [ "npm", "start" ]
