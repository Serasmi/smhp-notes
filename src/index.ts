import dotenv from 'dotenv';
import ip from 'ip';

import { application as app } from './app';

dotenv.config();

const port = process.env.PORT ?? 3000;

const address = ip.address();

app()
  .then(({ server }) => server.listen(port, () => console.log(`> Listening at http://${address}:${port}\n`)))
  .catch(e => {
    console.error(e);
    console.error("Can't start server");
  });
