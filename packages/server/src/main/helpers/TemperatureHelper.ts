export default class TemperatureHelper {
  static convertKelvinToCelsius(temperature: number): number {
    return temperature - 273.15;
  }
}
