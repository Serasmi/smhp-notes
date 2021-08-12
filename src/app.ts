import express from 'express';
import { Server } from 'http';
import { router } from 'src/routers';
import bodyParser from 'body-parser';
import { connectDB } from 'src/db/mongodb';

export const application = async (): Promise<{ server: Server }> => {
  const app = express();
  const server = new Server(app);

  await connectDB();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/', router);

  return { server };
};
