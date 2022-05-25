// @ts-check
const { test, expect } = require('@playwright/test');
const { PageFactory } = require('../factory/PageFactory');
test.beforeEach(async ({ page }) => {
  await page.goto('https://clone-592e1.web.app/');
});

test('basic test', async ({ page }) => {
  const pageFactory = new PageFactory(page);
  var data = await pageFactory.HomePage().getFirstName2();
  var data2 = await pageFactory.LoginPage().getFirstName();
  console.log(data);
  console.log(data2);
});
