#!/bin/bash

cd /tmp
git clone --depth=1 git@github.com:connectedacademy/elevator.git 
# ls /tmp/elevator
cp -r /tmp/elevator/docs/* ~/connectedacademy


cd ~/connectedacademy
# upgrade changes
git config --global user.name "CircleCI"
git config --global user.email "info@connectedacademy.io"
git checkout -b staging
git add .
git commit -am"[skip CI] AUTOBUILD"
git checkout -b gh-pages
git rebase -Xtheirs staging
git push -u -f origin gh-pages