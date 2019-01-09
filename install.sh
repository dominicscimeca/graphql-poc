#!/usr/bin/env bash

cd company-service
npm install

cd ../front-end/
yarn install

cd ../proxy/
npm install

cd ../user-service/
npm install