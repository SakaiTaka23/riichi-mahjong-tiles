normalize:
	sh scripts/normalize.sh
rotate:
	sh scripts/rotate.sh
build:
	make normalize
	make rotate
