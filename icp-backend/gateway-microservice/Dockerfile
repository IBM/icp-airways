FROM node:9.8.0
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm i -g webpack webpack-cli
RUN webpack-cli
EXPOSE 3006
RUN groupadd -g 999 appuser && \
    useradd -r -u 999 -g appuser appuser
USER appuser
CMD [ "node", "dist/bundle-be.js" ]
