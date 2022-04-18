#!/bin/bash

FULLHASH=$(cat style.less | md5)
HASH=${FULLHASH:0:6}
rm *.css
docker run -it --rm -v $(pwd):$(pwd) -w $(pwd)  ewoutp/lessc style.less style-${HASH}.css
echo "style-${HASH}.css"