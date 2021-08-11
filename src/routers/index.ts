import { Router } from 'express';
import notes from './notes';

const router = Router();

router.get('/', (req, res) => {
  res.send('Notes API Gateway');
});

router.use('/notes', notes);

export { router };
