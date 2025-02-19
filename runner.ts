import InteractionPage from './interaction-page.ts';

// Define the type for the simulation function
type SimulationFunction = (page: InteractionPage) => Promise<void>;

export async function runUserSimulation(localhost: boolean = false, headless: boolean = true, enableLogs: boolean = true, simulationFn: SimulationFunction): Promise<void> {
  const page = await InteractionPage.build(localhost, headless, enableLogs);

  try {
    await simulationFn(page);
  } catch (error) {
    console.error('An error occurred during the user simulation:', error);
    throw error;
  } finally {
    await page.cleanup();
  }
}
