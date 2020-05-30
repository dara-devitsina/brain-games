install:
	npm install

run:
	bin/brain-games.js

brain-games:
	node bin/brain-games.js

lint:
	npx eslint .

publish:
	npm publish --dry-run
