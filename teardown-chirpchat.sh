#!/bin/bash

kubectl scale deployment chirpchat-web --replicas 0

kubectl delete deployment chirpchat-web

kubectl delete service chirpchat-web
