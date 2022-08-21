#!/bin/bash

REPO="vss-repo"

git clone https://github.com/zztkm/vss.git $REPO
cd $REPO

# Install deps
v install markdown

# build vss
v . -o vss

# copy vss to project root
cp ./vss ..

rm -rf $REPO