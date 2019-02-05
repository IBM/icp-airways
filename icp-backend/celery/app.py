from flask import Flask
from celery import Celery
import time
from flask import jsonify
from flask import Response
from celery.result import AsyncResult
from celery import shared_task
import requests
from flask import request
from flask import abort
from flask import json
from flask_cors import CORS
import os
import smtplib
import time
app = Flask(__name__)  
CORS(app)  
app.config['CELERY_RESULT_BACKEND'] = os.environ['CELERY_RESULT_BACKEND']
CELERY_ACKS_LATE = True
app.config['CELERY_BROKER_URL'] = os.environ['CELERY_RESULT_BACKEND']
celery = Celery(app.name, broker=app.config['CELERY_BROKER_URL'],backend = app.config['CELERY_RESULT_BACKEND'])
celery.conf.update(app.config)

@celery.task(bind=True, default_retry_delay=1, max_retries=120, acks_late=True)
def email_task(self,toEmail,src,dest):
    gmail_user = 'icpairways@gmail.com'  
    gmail_password = '.icpairways'
    sent_from = gmail_user  
    to = ['icpairways@gmail.com',toEmail]  
    subject = 'Your Flight'  
    body = 'Hey there!, Your Flight Booking Deatil!'
    email_text = 'yo will be going from '+src+' to '+ dest
    server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
    server.ehlo()
    server.login(gmail_user, gmail_password)
    server.sendmail(sent_from, to, email_text)
    server.close()
    print 'Email sent!'
@app.route('/postEmail', methods=['POST'])
def email(id=None):
    if not request.json or not 'toemail' in request.json:
        abort(400)
    if not request.json or not 'src' in request.json:
        abort(400)
    if not request.json or not 'dest' in request.json:
        abort(400)
    toEmail = request.json['toemail']
    src = request.json['src']
    dest = request.json['dest']
    a = email_task.delay(toEmail,src,dest)
    b = a.task_id
    res = celery.AsyncResult(b)
    print res
    data = {'result':"success"}
    js = json.dumps(data)
    return Response(
        mimetype='application/json',
        status=200
    )

@app.route('/healthz', methods=['GET'])
def healthz(id=None):
    return Response(
        mimetype='application/json',
        status=200
    )
if __name__ == '__main__':
    app.run(host='0.0.0.0',port=4000)