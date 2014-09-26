nightwatch-skeleton
===================

Skeleton project for getting up and running quickly with Nightwatch for Selenium testing.

# Using this skeleton
To use this skeleton to write your own Nightwatch tests you need have a machine (mostly Mac/Linux friendly here) with Node, NPM, and Java installed and running.

Most likely you are going to want to use version control. This skeleton is tailored for git. Get started by creating yourself an empty git repo and clone it to your computer. Once you have it cloned, open a terminal and cd to your repo's root directory. Copy and paste this command to download and seed your new repo:

	curl -o nightwatch.zip -L https://www.dropbox.com/s/myzq5es8jrny6ic/nightwatch-skeleton.zip?dl=0 \
	&& unzip nightwatch.zip && rm nightwatch.zip

This downloads the packaged archive, unzips it, and removes the zip file. Next up, install our dependencies.

	npm install
	
Once you have your dependencies installed you should be able to run Nightwatch and do a quick search on Google.

	./nightwatch
	
If your terminal is NOT fullscreen you will see Chrome popup, load Google, and do a basic search.

# Default environments
The default environment for this Nightwatch config is Chrome. The nightwatch.json file defines our environments. Other available ones include Firefox and Safari. You can specify your environment with the -e flag to nightwatch.

	./nightwatch -e default,firefox,safari

# URL configs
The URLS for your different environments are managed in the config folder. You can attach a config to the main index.js module and then set which environment you want to run against using NODE_ENV. For example, if you wanted local/staging/production for jameshuston.net you might create a new config file like this in config/jameshuston.js:

	module.exports = require('envcfg')({
	  '*': {
		url: 'http://jameshuston.net'
	  },
	  'staging': {
	  	url: 'http://staging.jameshuston.net'
	  },
	  'local': {
	  	url: 'http://localhost:4000'
	  }
	});

You then attach it to config/index.js:

	
	module.exports = {
	  'google': require('./google'),
	  'jameshuston': require('./jameshuston')
	};

As long as you require config/ into your project you could then access the URLs based on environment.

	var config = require('../config');
	...
	browser.url(config.jameshuston.url);

This would let you run your tests in production by simply running ./nightwatch or switch to localhost:

	NODE_ENV=local ./nightwatch

You can abuse the envcfg module and set up as many environments as you want.


# Some other tidbits

Seed your repo by downloading this link:

	https://www.dropbox.com/s/myzq5es8jrny6ic/nightwatch-skeleton.zip?dl=0

Save the file, create your new empty repo, then from the root of your repo run:

	unzip ~/Downloads/nightwatch-skeleton.zip

Run this from your shell in your new repo to do it all with one command:

	curl -o nightwatch.zip -L https://www.dropbox.com/s/myzq5es8jrny6ic/nightwatch-skeleton.zip?dl=0 \
	&& unzip nightwatch.zip && rm nightwatch.zip