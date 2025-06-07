attribute:
	sh scripts/fix-attribute.sh
normalize:
	sh scripts/normalize.sh
rotate:
	sh scripts/rotate.sh
merge:
	sh scripts/merge.sh
icons:
	pnpm svgr -d components/black/regular Black/regular
	pnpm svgr -d components/black/rotate Black/rotate
	pnpm svgr -d components/black/regular-merged Black/regular-merged
	pnpm svgr -d components/black/rotate-merged Black/rotate-merged
	pnpm svgr -d components/regular/regular Regular/regular
	pnpm svgr -d components/regular/rotate Regular/rotate
	pnpm svgr -d components/regular/regular-merged Regular/regular-merged
	pnpm svgr -d components/regular/rotate-merged Regular/rotate-merged
build:
	make normalize
	make attribute
	make rotate
	make merge
	make icons
	pnpm build
