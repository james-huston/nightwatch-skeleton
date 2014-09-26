
package:
	@git archive -o ~/Dropbox/skeletons/nightwatch-skeleton.zip HEAD

install:
	@npm install

test:
	@nightwatch
