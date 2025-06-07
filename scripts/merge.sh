#!/bin/sh

mkdir -p Black/regular-merged
mkdir -p Regular/regular-merged
mkdir -p Black/rotate-merged
mkdir -p Regular/rotate-merged

for file in Black/regular/*.svg Regular/regular/*.svg; do
    style=$(echo "$file" | cut -d/ -f1)
    base=$(basename "$file" .svg)
    out="$style/regular-merged/${base}-m"
    ts-node scripts/merge-svg.ts "$style/regular/$style-Front.svg" "$file" "$out.svg"
done

for file in Black/rotate/*.svg Regular/rotate/*.svg; do
    style=$(echo "$file" | cut -d/ -f1)
    base=$(basename "$file" .svg)
    out="$style/rotate-merged/${base}-m"
    ts-node scripts/merge-svg.ts "$style/rotate/$style-Front-r.svg" "$file" "$out.svg"
done
