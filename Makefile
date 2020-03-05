.PUBLISH: publish
publish:
	npm run build
	gulp bump
	npm publish --access public