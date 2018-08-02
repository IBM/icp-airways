#!/bin/bash
echo "building database ...."
nohup python app.py &
celery worker -A app.celery --loglevel=debug