import ClientLoggerType from './models/client_logger_type.ts';
import InteractionPage from './models/interaction-page.ts';
import LogLevelType from './models/log_level_type.ts';
import ServerLoggerType from './models/server_logger_type.ts';
import { runUserSimulations } from './runner.ts';


console.log(`Start time: ${new Date().toISOString()}`);

await runUserSimulations(
  /* browser count */ 5,
  /* localhost */ false,
  /* headless */ true,
  /* enable logging to client console */ false,
  /* client logger */ ClientLoggerType.justFetch,
  /* server logger */ ServerLoggerType.MyLogger,
  /* log level */ LogLevelType.Info,

  /* simulation function */
  async (page: InteractionPage) => {
    for (let i = 0; i < 20000; i++) {
      await page.clickButton();
    }
  }
);