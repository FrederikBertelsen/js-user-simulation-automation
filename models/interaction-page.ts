import { Page, Browser, chromium } from 'playwright';
import ClientLoggerType from './client_logger_type';
import ServerLoggerType from './server_logger_type';
import LogLevelType from './log_level_type';

class InteractionPage {
  private browserId: number;
  private page: Page;
  private browser: Browser;
  private clientConsoleLogsEnabled: boolean;

  private constructor(browserId: number = -1, page: Page, browser: Browser, logsEnabled: boolean) {
    this.browserId = browserId;
    this.page = page;
    this.browser = browser;
    this.clientConsoleLogsEnabled = logsEnabled;
  }

  static async build(
    browserId: number = -1,
    localhost: boolean = false,
    headless: boolean = true,
    enableClientConsoleLogs: boolean = true,
    clientLogger: ClientLoggerType = ClientLoggerType.justFetch
  ): Promise<InteractionPage> {

    
    const browser = await chromium.launch({ headless: headless });
    const context = await browser.newContext();
    const page = await context.newPage();

    const testPage = new InteractionPage(browserId, page, browser, enableClientConsoleLogs);

    // select client logger
    testPage.log('Navigating to test page URL...');
    let domain = localhost ? 'http://localhost:4000' : 'https://bachelor.15263748.xyz';
    let pageUrl = `/${clientLogger}.html`;
    let url = domain + pageUrl;
    await page.goto(url);
    testPage.log(`Navigated to: ${url}`);

    return testPage;
  }

  log(message: string): void {
    if (this.clientConsoleLogsEnabled) {
      console.log(`${this.browserId}: ${message}`);
    }
  }

  async randomSleep(minTime: number = 2000, maxTime: number = 3000, print: boolean = true): Promise<void> {
    if (minTime == 0 && maxTime == 0) {
      return;
    }
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
    this.log('Browser closed');
  }
}

export default InteractionPage;