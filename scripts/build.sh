#!/bin/bash

REPO="vss-repo"

# build vss
git clone https://github.com/zztkm/vss.git $REPO
cd $REPO
v vss.v

# copy vss to project root
cp ./vss ..

# cd project root
cd ..

# remove vss repo
rm -rf $REPO

# build website
./vss

rm vss