import { Page, Browser, chromium } from 'playwright';

class InteractionPage {
  private page: Page;
  private browser: Browser;

  private constructor(page: Page, browser: Browser) {
    this.page = page;
    this.browser = browser;
  }

  static async build(): Promise<InteractionPage> {
    console.log('Launching browser...');
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    const testPage = new InteractionPage(page, browser);
    console.log('Navigating to test page URL...');
    await page.goto('https://bachelor.15263748.xyz/index.html');
    console.log('Page loaded!\n');
    return testPage;
  }

  async randomSleep(minTime: number = 2000, maxTime: number = 3000, print: boolean = true): Promise<void> {
    if (minTime > maxTime) {
      throw new Error('Min value must be less than max value');
    }
    if (minTime < 0 || maxTime < 0) {
      throw new Error('Min and max values must be positive');
    }

    const sleepTime = Math.floor(Math.random() * (maxTime - minTime)) + minTime;

    if (print)
      console.log(`Random sleep (${minTime}ms, ${maxTime}ms) for: ${sleepTime}ms `);

    await this.page.waitForTimeout(sleepTime);
  }

  async sleep(time: number): Promise<void> {
    if (time < 0) {
      throw new Error('Time must be positive');
    }

    console.log(`Sleep for ${time}ms`);
    await this.page.waitForTimeout(time);
  }

  async clickButton(): Promise<void> {
    await this.page.click('#btn-click');
    console.log('Button clicked');
  }

  async typeIntoInput(
    inputText: string = "Hello World!",
    typeSpeedSlow: number = 50,
    typeSpeedFast: number = 100
  ): Promise<void> {
    await this.page.waitForSelector('#text-input', { state: 'visible' });

    const elm = await this.page.$('#text-input');
    if (!elm) {
      throw new Error('Element not found');
    }

    await elm.fill('');
    for (const char of inputText) {
      await elm.type(char);
      await this.randomSleep(typeSpeedSlow, typeSpeedFast, false);
    }

    console.log(`Finished typing into input (${typeSpeedSlow}ms - ${typeSpeedFast}ms): ${inputText}`);
  }

  async checkCheckbox(): Promise<void> {
    await this.page.check('#checkbox');
    console.log('Checkbox checked');
  }

  async selectRadioButton(optionNumber: number = 1): Promise<void> {
    const optionValue = `option${optionNumber}`;
    await this.page.check(`input[name="radio-group"][value="${optionValue}"]`);
    console.log(`Radio button Option selected: ${optionNumber}`);
  }

  async selectFromDropdown(optionNumber: number = 1): Promise<void> {
    const optionValue = `option${optionNumber}`;
    await this.page.selectOption('select#select', optionValue);
    console.log(`Dropdown Option selected: ${optionNumber}`);
  }

  async cleanup(): Promise<void> {
    await this.browser.close();
    console.log('\nBrowser closed');
  }
}

export default InteractionPage;