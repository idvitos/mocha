//var assert = require('assert');
//var should = require('should');
//var should = require('should/as-function');
var chai = require('chai');  
var assert = chai.assert;    // Using Assert style
var expect = chai.expect;    // Using Expect style
var should = chai.should();  // Using Should style

describe('webdriver.io page', function() {
    it.skip('should have the right title - the fancy generator way', function () {
        browser.url('/');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });

    it.skip('should have a link to API page', function () {
        browser.url('/');
        browser.click('a[href="/api.html"]');
	var title = browser.getText('#WebdriverIO-API-Docs');
        assert.equal(title, 'WEBDRIVERIO API DOCS');
    });

    it('Search works correctly', function () {
        browser.url('/');
	browser.setValue('.ds-input', 'click');
	browser.pause(2000);
	browser.isVisible('.algolia-docsearch-suggestion--title');
	browser.click('.algolia-docsearch-suggestion--title');
	browser.keys('\uE007');
	browser.pause(2000);
	var title = browser.getText('h1[id="click"]');
        assert.equal(title, 'CLICK');
    });
});
