interface MusicConfig {
  clientId: string;
  clientSecret: string;
}

export default {
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
} as MusicConfig;
