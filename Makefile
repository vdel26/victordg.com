build: styles/style.css
	@echo "building css..."
	@autoprefixer styles/style.css -o styles/style.built.css
	@echo "building js..."
	@cat js/velocity.min.js js/script.js > js/script.built.js

.PHONY: build