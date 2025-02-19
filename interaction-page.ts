import { Page, Browser, chromium } from 'playwright';

class InteractionPage {
  private page: Page;
  private browser: Browser;
  private logsEnabled: boolean;

  private constructor(page: Page, browser: Browser, logsEnabled: boolean) {
    this.page = page;
    this.browser = browser;
    this.logsEnabled = logsEnabled;
  }

  static async build(localhost: boolean = false, headless: boolean = true, logsEnabled: boolean = true): Promise<InteractionPage> {
    console.log('Launching browser...');
    const browser = await chromium.launch({ headless: headless });
    const context = await browser.newContext();
    const page = await context.newPage();

    const testPage = new InteractionPage(page, browser, logsEnabled);

    testPage.log('Navigating to test page URL...');
    if (localhost) {
      await page.goto('http://localhost:4000/index.html');
    } else {
      await page.goto('https://bachelor.15263748.xyz/index.html');
    }

    testPage.log('Page loaded!\n');
    return testPage;
  }

  log(message: string): void {
    if (this.logsEnabled) {
      console.log(message);
    }
  }

  async randomSleep(minTime: number = 2000, maxTime: number = 3000, print: boolean = true): Promise<void> {
    if (minTime > maxTime) {
      throw new Error('Min value must be less than max value');
    }
    if (minTime < 0 || maxTime < 0) {
      throw new Error('Min and max values must be positive');
    }

    const sleepTime = Math.floor(Math.random() * (maxTime - minTime)) + minTime;

    this.log(`Random sleep (${minTime}ms, ${maxTime}ms) for: ${sleepTime}ms `);

    await this.page.waitForTimeout(sleepTime);
  }

  async sleep(time: number): Promise<void> {
    if (time < 0) {
      throw new Error('Time must be positive');
    }

    this.log(`Sleep for ${time}ms`);
    await this.page.waitForTimeout(time);
  }

  async clickButton(): Promise<void> {
    await this.page.click('#btn-click');
    this.log('Button clicked');
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

    this.log(`Finished typing into input (${typeSpeedSlow}ms - ${typeSpeedFast}ms): ${inputText}`);
  }

  async checkCheckbox(): Promise<void> {
    await this.page.check('#checkbox');
    this.log('Checkbox checked');
  }

  async selectRadioButton(optionNumber: number = 1): Promise<void> {
    const optionValue = `option${optionNumber}`;
    await this.page.check(`input[name="radio-group"][value="${optionValue}"]`);
    this.log(`Radio button Option selected: ${optionNumber}`);
  }

  async selectFromDropdown(optionNumber: number = 1): Promise<void> {
    const optionValue = `option${optionNumber}`;
    await this.page.selectOption('select#select', optionValue);
    this.log(`Dropdown Option selected: ${optionNumber}`);
  }

  async cleanup(): Promise<void> {
    await this.browser.close();
    this.log('\nBrowser closed');
  }
}

export default InteractionPage;