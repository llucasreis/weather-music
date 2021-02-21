interface WeatherConfig {
  clientId: string;
}

export default {
  clientId: process.env.OPEN_WEATHER_CLIENT_ID,
} as WeatherConfig;
