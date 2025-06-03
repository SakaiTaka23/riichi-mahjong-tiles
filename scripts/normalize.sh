#!/bin/sh

mkdir -p Black/regular
mkdir -p Regular/regular

# normalize
for file in source/*/*.svg; do
    style="$(echo "$file" | cut -d/ -f2)"
    base="$(basename "$file" .svg)"
    out="$style/regular/$base"
    inkscape "$file" --export-dpi=96 --export-plain-svg --export-filename="$out".svg
done
