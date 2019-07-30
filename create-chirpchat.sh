#!/bin/bash
 
kubectl run chirpchat-web "--image=eu.gcr.io/quondam/chirpchat:1.0-SNAPSHOT"  "--port=8080"

sleep 5s # Waits 5 seconds

kubectl expose deployment chirpchat-web --type=NodePort

