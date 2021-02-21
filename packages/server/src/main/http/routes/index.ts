import FetchTemperatureControllerFactory from '@main/factories/controllers/FetchTemperatureControllerFactory';
import { Router } from 'express';

const routes = Router();
const fetchTemperatureController = FetchTemperatureControllerFactory();

routes.get(
  '/temperature',
  fetchTemperatureController.execute.bind(fetchTemperatureController),
);

export default routes;
