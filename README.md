- Install npm

- Install Node

- Create folder for tests and move to folder ($ mkdir MochaProject / $ cd MochaProject)

- Run - $ npm int

- Configure Package.json file according to your needs

- Install webdriverio as dependency - $ npm install webdriverio --save-dev

- Install wdio - $ ./node_modules/.bin/wdio config

- Configure file wdio.conf.js

- Run command - $ npm install wdio-selenium-standalone-service --save-dev

- Run command- $ ./node_modules/.bin/selenium-standalone install

- Run command to start Selenium - $ ./node_modules/.bin/selenium-standalone start

- Install Chai as dependency - $ npm install chai --save-dev

- Create folder “test” inside “MochaProject”

- Create any JS file inside “test” folder and put the following script there:
	var expect = require('chai').expect;
	describe('webdriver.io api page', function() {
	   it('should be able to filter for commands', function () {
	       browser.url('http://webdriver.io/api.html');

	       // filtering property commands
	       $('.searchbar input').setValue('getT');

	       // get all results that are displayed
	       var results = $$('.commands.property a').filter(function (link) {
	           return link.isVisible();
	       });

	       // assert number of results
	       expect(results.length).to.be.equal(3);

	       // check out second result
	       results[1].click();
	       expect($('.doc h1').getText()).to.be.equal('GETTEXT');
	   });
	});

- Run command - $ npm test. It runs all tests inside “test” folder

