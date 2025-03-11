import ClientLoggerType from './models/client_logger_type.ts';
import InteractionPage from './models/interaction-page.ts';
import LogLevelType from './models/log_level_type.ts';
import ServerLoggerType from './models/server_logger_type.ts';
import { runUserSimulations } from './runner.ts';

runUserSimulations(
  /* browser count */ 5,
  /* localhost */ false,
  /* headless */ true,
  /* enable logging to client console */ false,
  /* client logger */ ClientLoggerType.justFetch,
  /* server logger */ ServerLoggerType.Console,
  /* log level */ LogLevelType.Info,

  /* simulation function */
  async (page: InteractionPage) => {
    const superString = "X".repeat(100000);

    await page.sleep(5000);

    await page.typeIntoInput(superString, 0, 0);
  }
);