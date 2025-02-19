import InteractionPage from './interaction-page.ts';
import { runUserSimulation } from './runner.ts';

for (var i = 0; i < 10; i++) {
  runUserSimulation(
    /* localhost */ false,
    /* headless */ true,
    /* enable logging to console */ false,
    async (page: InteractionPage) => {
      for (var i = 0; i < 1000; i++) {
        await page.clickButton();
        await page.checkCheckbox();
        await page.selectRadioButton();
        await page.selectFromDropdown();
      }
    });
}