@echo off
title auto commit
cd F:\xz\xzstageplus\pic3\pic3
git config --global http.proxy http://127.0.0.1:10005
git add -A
git commit -m "xz"
git push
exit