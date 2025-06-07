#!/bin/sh

mkdir -p Black/regular
mkdir -p Regular/regular

for file in normalized/Black/*.svg normalized/Regular/*.svg; do
    style=$(echo "$file" | cut -d/ -f2)
    base=$(basename "$file" .svg)
    out="$style/regular/${base}"
    ts-node scripts/attribute.ts "$file" "$out.svg"
done
