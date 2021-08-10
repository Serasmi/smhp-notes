import { Router } from 'express';
import { json, urlencoded } from 'body-parser';

export const getRouteInstance = (): Router => {
  const router = Router();

  router.use(json());
  router.use(urlencoded({ extended: true }));

  return router;
};
