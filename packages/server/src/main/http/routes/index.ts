import FetchTemperatureControllerFactory from '@main/factories/controllers/FetchTemperatureControllerFactory';
import GetPlaylistController from '@presentation/controllers/GetPlaylistController';
import { Router } from 'express';

const routes = Router();
const fetchTemperatureController = FetchTemperatureControllerFactory();
const getPlaylistController = new GetPlaylistController();

routes.get(
  '/temperature',
  fetchTemperatureController.execute.bind(fetchTemperatureController),
);

routes.get(
  '/playlists',
  getPlaylistController.execute.bind(getPlaylistController),
);

export default routes;
