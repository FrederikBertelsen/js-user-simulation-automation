import ClientLoggerType from './models/client_logger_type.ts';
import InteractionPage from './models/interaction-page.ts';
import LogLevelType from './models/log_level_type.ts';
import ServerLoggerType from './models/server_logger_type.ts';

// Define the type for the simulation function
type SimulationFunction = (page: InteractionPage) => Promise<void>;

export async function runUserSimulations(
  browserCount: number = 1,
  localhost: boolean = false,
  headless: boolean = true,
  enableClientConsoleLogs: boolean = true,
  clientLogger: ClientLoggerType = ClientLoggerType.justFetch,
  serverLogger: ServerLoggerType = ServerLoggerType.Console,
  logLevel: LogLevelType = LogLevelType.Info,
  simulationFn: SimulationFunction): Promise<void> {

  // select server logger
  const domain = localhost ? 'http://localhost:4000' : 'https://bachelor.15263748.xyz';
  let response = await fetch(`${domain}/api/switch-logger`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ logger: serverLogger, options: { level: logLevel } })
  });
  if (!response.ok) {
    throw new Error(`Failed to switch server logger to: ${serverLogger} (status ${response.status})`);
  }
  console.log(`Switched server logger to: ${serverLogger}`);

  // run simulations for each browser
  console.log(`Running ${browserCount} user simulations...\n`);
  for (let i = 0; i < browserCount; i++) {
    runUserSimulation(i, localhost, headless, enableClientConsoleLogs, clientLogger, simulationFn);
  }

  async function runUserSimulation(
    browserId: number = -1,
    localhost: boolean = false,
    headless: boolean = true,
    enableClientConsoleLogs: boolean = true,
    clientLogger: ClientLoggerType = ClientLoggerType.justFetch,
    simulationFn: SimulationFunction): Promise<void> {

    const page = await InteractionPage.build(browserId, localhost, headless, enableClientConsoleLogs, clientLogger);

    try {
      console.log(`${browserId}: SIMULATION STARTED`);
      await simulationFn(page);
      console.log(`${browserId}: SIMULATION COMPLETED`);
    } catch (error) {
      console.error('An error occurred during the user simulation:', error);
      throw error;
    } finally {
      await page.cleanup();
    }
  }
}