import SpotifyWebApi from 'spotify-web-api-node';
import musicConfig from '@infra/config/music';

export default class SpotifyMusicProvider {
  private spotifyApi: SpotifyWebApi;

  constructor() {
    this.spotifyApi = new SpotifyWebApi({
      clientId: musicConfig.clientId,
      clientSecret: musicConfig.clientSecret,
    });
  }

  async getPlaylists(
    category: string,
  ): Promise<SpotifyApi.CategoryPlaylistsReponse> {
    const response = await this.spotifyApi.getPlaylistsForCategory(category, {
      country: 'BR',
      limit: 10,
      offset: 0,
    });

    return response.body;
  }

  private async setAccessToken() {
    try {
      const credentials = await this.spotifyApi.clientCredentialsGrant();

      const { access_token } = credentials.body;

      this.spotifyApi.setAccessToken(access_token);
    } catch (err) {
      console.log(
        'Something went wrong when retrieving an access token',
        err.message,
      );
    }
  }

  static async build(): Promise<SpotifyMusicProvider> {
    const spotifyApi = new SpotifyMusicProvider();
    await spotifyApi.setAccessToken();

    return spotifyApi;
  }
}
