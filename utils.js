randomSleep = async (min, max) => {
  if (min > max) {
    throw new Error('Min value must be less than max value');
  }
  if (min < 0 || max < 0) {
    throw new Error('Min and max values must be positive');
  }

  const sleepTime = Math.floor(Math.random() * (max - min)) + min;

  await new Promise(resolve => setTimeout(resolve, sleepTime));
}

async function simulateTyping(page, selector, text, typeSpeedSlow = 100, typeSpeedfast = 50) {
  await page.waitForSelector(selector, { state: 'visible' });

  elm = await page.$(selector);

  await elm.fill('')
  for (const char of text) {
    await elm.type(char);
    await randomSleep(typeSpeedSlow, typeSpeedfast);
  }
}

async function simulateScroll(page, scrollSpeedSlow = 50, scrollSpeedFast = 100) {
  const scrollHeight = await page.evaluate(() => document.body.scrollHeight);

  for (let position = 0; position < scrollHeight; position += 100) {
    await page.evaluate((y) => window.scrollTo(0, y), position);
    await randomSleep(scrollSpeedSlow, scrollSpeedFast);
  }
}


