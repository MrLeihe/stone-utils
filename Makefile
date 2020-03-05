.PHONY: deploy
deploy:
	gulp deploy
	npm run build
	npm publish --access public