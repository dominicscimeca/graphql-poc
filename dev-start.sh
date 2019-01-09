#!/usr/bin/env bash

cd user-service; npm start &
cd ../proxy; npm start &
cd ../front-end; yarn run relay &
yarn start  &
#cd ../company-service; npm start
