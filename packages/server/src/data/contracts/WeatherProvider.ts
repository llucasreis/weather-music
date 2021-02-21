export default interface WeatherProvider {
  getTemperature(city: string): Promise<number | null>;
}
