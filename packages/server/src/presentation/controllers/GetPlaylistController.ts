import SpotifyMusicProvider from '@data/providers/Music/implementations/SpotifyMusicProvider';
import { Request, Response } from 'express';

export default class GetPlaylistController {
  async execute(req: Request, res: Response): Promise<Response> {
    const spotifyProvider = await SpotifyMusicProvider.build();

    const { category } = req.query;

    const playlists = await spotifyProvider.getPlaylists(category as string);

    return res.status(200).json({ playlists });
  }
}
