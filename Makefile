install: install-deps

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

brain-games:
	node bin/brain-games.js

lint:
	npx eslint .

publish:
	npm publish --dry-run
