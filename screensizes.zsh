#!/bin/zsh

for file in $( ls -1 js/*x*.js) ; do phantomjs $file $@ ; done
