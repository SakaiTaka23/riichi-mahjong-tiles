#!/bin/sh

mkdir -p Black/rotate
mkdir -p Regular/rotate

# rotate
for file in Black/regular/*.svg Regular/regular/*.svg; do
    style=$(echo "$file" | cut -d/ -f1)
    base=$(basename "$file" .svg)
    out="$style/rotate/${base}-r"
    ts-node scripts/rotate-svg.ts "$file" "$out.svg"
done
