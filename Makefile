
all:
	npm update && ./node_modules/.bin/node-gyp configure && ./node_modules/.bin/node-gyp rebuild --msvs_version=auto

clean:
	rm -rf build
