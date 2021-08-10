import express from 'express';
import { Server } from 'http';
import { router } from 'src/routes';
import bodyParser from 'body-parser';

export const application = async (): Promise<{ server: Server }> => {
  const app = express();
  const server = new Server(app);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/', router);

  return { server };
};
