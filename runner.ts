import InteractionPage from './interaction-page.ts';

// Define the type for the simulation function
type SimulationFunction = (page: InteractionPage) => Promise<void>;

export async function runUserSimulation(simulationFn: SimulationFunction): Promise<void> {
  const iPage = await InteractionPage.build();

  try {
    await simulationFn(iPage);
  } catch (error) {
    console.error('An error occurred during the user simulation:', error);
    throw error;
  } finally {
    await iPage.cleanup();
  }
}
