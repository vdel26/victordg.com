build: styles/style.css
	@echo "building css..."
	@autoprefixer styles/style.css -o styles/style.built.css

.PHONY: build