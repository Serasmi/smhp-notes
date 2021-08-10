import { getRouteInstance } from 'routes/utils/getRouteInstance';

const router = getRouteInstance();

router.get('/', (req, res) => {
  res.send('Node root path');
});

export { router };
