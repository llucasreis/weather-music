import FetchTemperatureUseCase from '@domain/useCases/FetchTemperatureUseCase';
import { Request, Response } from 'express';

interface RequestDTO {
  city: string;
}

export default class FetchTemperatureController {
  constructor(private useCase: FetchTemperatureUseCase) {}

  async execute(
    req: Request<unknown, unknown, unknown, RequestDTO>,
    res: Response,
  ): Promise<Response> {
    const { city } = req.query;

    const temperature = await this.useCase.execute({ city });

    if (temperature) {
      return res.status(200).json({ temperature });
    }
    return res
      .status(404)
      .json({ message: 'Temperature not found. Check your city!' });
  }
}
