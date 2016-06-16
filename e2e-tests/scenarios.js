'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view when location hash/fragment is empty', function() {
    browser.get('index.html');
    /*expect(browser.getLocationAbsUrl()).toMatch("/view");*/
    expect(browser.getTitle()).toBe('Formangular');
  });


 });
