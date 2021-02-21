import querystring from 'querystring';
import weatherConfig from '@infra/config/weather';
import RequestHelper from '@main/helpers/RequestHelper';
import TemperatureHelper from '@main/helpers/TemperatureHelper';
import WeatherProvider from '@data/contracts/WeatherProvider';

interface WeatherData {
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
}

export default class OpenWeatherMapsProvider implements WeatherProvider {
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  }

  async getTemperature(city: string): Promise<number | null> {
    const query = querystring.stringify({
      q: city,
      appid: weatherConfig.clientId,
    });

    console.log(`${this.baseUrl}?${query}`);

    const response = await RequestHelper.get(`${this.baseUrl}?${query}`);

    if (response) {
      const {
        main: { temp },
      } = response.data as WeatherData;

      return TemperatureHelper.convertKelvinToCelsius(temp);
    }
    return null;
  }
}
