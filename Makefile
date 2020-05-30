install: install-deps

install-deps:
	npm ci

lint:
	npx eslint .

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js
