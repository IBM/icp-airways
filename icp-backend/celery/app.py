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

app = Flask(__name__)  
CORS(app)
  
app.config['CELERY_RESULT_BACKEND'] = os.environ['CELERY_RESULT_BACKEND']
app.config['CELERY_BROKER_URL'] = os.environ['CELERY_BROKER_URL']
celery = Celery(app.name, broker=app.config['CELERY_BROKER_URL'],backend = app.config['CELERY_RESULT_BACKEND'])
celery.conf.update(app.config)

@celery.task(bind=True)
def email_task(self,toEmail,src,dest):
    requests.post(os.environ['EMAILAPI'], data = {'toemail':toEmail,'src':src,'dest':dest})
    return "succuss"
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
    data = {'result':'success'}
    js = json.dumps(data)

    return Response(
        js,
        mimetype='application/json',
        status=200
    )
if __name__ == '__main__':
    app.run(host='0.0.0.0',port=4000)