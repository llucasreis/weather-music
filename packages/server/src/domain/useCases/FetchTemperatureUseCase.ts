import WeatherProvider from '@data/providers/Weather/contracts/WeatherProvider';

interface RequestDTO {
  city: string;
}

export default class FetchTemperatureUseCase {
  constructor(private weatherProvider: WeatherProvider) {}

  public async execute(data: RequestDTO): Promise<number | null> {
    const temperature = await this.weatherProvider.getTemperature(data.city);

    return temperature;
  }
}
