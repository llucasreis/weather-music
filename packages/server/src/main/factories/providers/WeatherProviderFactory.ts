import WeatherProvider from '@data/contracts/WeatherProvider';
import OpenWeatherMapsProvider from '@data/providers/Weather/implementations/OpenWeatherMapsProvider';

export default function WeatherProviderFactory(): WeatherProvider {
  return new OpenWeatherMapsProvider();
}
