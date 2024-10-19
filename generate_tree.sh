#!/bin/bash

function tree {
    find ${1:-.} -maxdepth 2 -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'
}

tree