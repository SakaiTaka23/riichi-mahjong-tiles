normalize:
	sh scripts/normalize.sh
rotate:
	sh scripts/rotate.sh
icons:
	pnpm svgr -d components/black/regular Black/regular
	pnpm svgr -d components/black/rotate Black/rotate
	pnpm svgr -d components/regular/regular Regular/regular
	pnpm svgr -d components/regular/rotate Regular/rotate
build:
	make normalize
	make rotate
	make icons
