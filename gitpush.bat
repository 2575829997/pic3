@echo off
title auto commit
git config --global http.proxy http://127.0.0.1:10004
git add -A
git commit -m "xz"
git push
exit