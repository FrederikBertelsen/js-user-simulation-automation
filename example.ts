import InteractionPage from './interaction-page.ts';
import { runUserSimulation } from './runner.ts';

await runUserSimulation(async (page: InteractionPage) => {
  await page.clickButton();
  await page.typeIntoInput();
  await page.checkCheckbox();
  await page.selectRadioButton();
  await page.selectFromDropdown();

  await page.randomSleep(2000, 4000);
});
