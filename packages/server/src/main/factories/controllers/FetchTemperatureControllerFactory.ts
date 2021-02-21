import FetchTemperatureUseCase from '@domain/useCases/FetchTemperatureUseCase';
import FetchTemperatureController from '@presentation/controllers/FetchTemperatureController';
import WeatherProviderFactory from '../providers/WeatherProviderFactory';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function FetchTemperatureControllerFactory() {
  const weatherProvider = WeatherProviderFactory();
  const fetchTemperatureUseCase = new FetchTemperatureUseCase(weatherProvider);
  const fetchTemperatureController = new FetchTemperatureController(
    fetchTemperatureUseCase,
  );

  return fetchTemperatureController;
}
