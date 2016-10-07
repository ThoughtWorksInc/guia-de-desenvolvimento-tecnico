#!/bin/sh

START="<div id=\"page-footer\"><hr><p><em>"
END="</em></p>"

## Topics
for file in ./_book/topics/*.html; do
	filename=$(echo ${file##*/} | cut -f 1 -d '.')
	date="$(git log -1 --date=iso --format="%ad" -- "topics/$filename.md")"

	sed -i bak -e "s,\($START\).*\($END\),\1Última modificação: $date\2," ${file}
done

## README
date="$(git log -1 --date=iso --format="%ad" -- "README.md")"

sed -i bak -e "s,\($START\).*\($END\),\1Última modificação: $date\2," "_book/index.html"
