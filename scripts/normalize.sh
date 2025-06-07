#!/bin/sh

mkdir -p normalized/Black
mkdir -p normalized/Regular

# normalize
for file in source/*/*.svg; do
    style="$(echo "$file" | cut -d/ -f2)"
    base="$(basename "$file" .svg)"
    out="normalized/$style/$style-$base"
    inkscape "$file" --export-dpi=96 --export-plain-svg --export-filename="$out".svg
done
