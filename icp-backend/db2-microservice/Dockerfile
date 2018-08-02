FROM ibmcom/db2express-c:latest
ENV DB2INST1_PASSWORD=db2inst1-pwd
ENV LICENSE=accept
COPY . .
USER root
RUN chmod +x run.sh
ENTRYPOINT [ "./run.sh" ]
EXPOSE 50000