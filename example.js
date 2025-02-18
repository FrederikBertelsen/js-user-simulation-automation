const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://imdb.com');

  await page.fill('input#suggestion-search', 'pigen med nålen');
  await page.press('input#suggestion-search', 'Enter');

  await page.click('section[data-testid="find-results-section-title"] li a');

  await page.waitForTimeout(10000);

  await browser.close();
})();
