#!/bin/sh

START="<div id=\"page-footer\"><hr><p><em>"
END="</em></p>"

for file in ./_book/topics/*; do
	filename=$(echo ${file##*/} | cut -f 1 -d '.')
	date="$(git log -1 --date=iso --format="%ad" -- "topics/$filename.md")"

	echo $date
	grep "\($START\).*\($END\)" $file
	sed -i bak -e "s,\($START\).*\($END\),\1Última modificação: $date\2," ${file}
	grep "\($START\).*\($END\)" $file
done

