import axios, { AxiosResponse } from 'axios';

export default class RequestHelper {
  static async get(url: string): Promise<AxiosResponse | null> {
    try {
      const response = await axios.get(url);

      return response;
    } catch (err) {
      console.error(`Error: ${err}`);
      return null;
    }
  }
}
