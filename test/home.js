var assert = require('assert');

describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('/');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });

    it('should have a link to API page', function () {
        browser.url('/');
        browser.click('a[href="/api.html"]');
	var title = browser.getText('#WebdriverIO-API-Docs');
        assert.equal(title, 'WEBDRIVERIO API DOCS');
    });
});
