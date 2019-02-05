#!/bin/bash
echo "building database ...."
nohup python app.py &
celery worker  -A app.celery -B --loglevel=debug