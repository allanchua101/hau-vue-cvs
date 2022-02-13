#!/bin/bash

cd ./hau-cvs
npm run build

rm -rf ../docs
cp -r ./dist ../docs
