import { Auth, Db, MongoClient, MongoClientOptions } from 'mongodb';
import { logInfo } from 'src/db/mongodb/utils';

const dbName = process.env.MONGODB_NAME;
const uri = process.env.MONGODB_URI;

const auth: Auth = {
  username: process.env.MONGODB_USER,
  password: process.env.MONGODB_PASSWORD,
};

const clientOptions: MongoClientOptions = {
  auth,
  retryWrites: true,
  w: 'majority',
};

// Database
let db: Db;

export const connectDB = async () => {
  logInfo('Connecting to DB...');

  if (!(uri && dbName && auth.username && auth.password)) {
    throw new Error('Mongo: Bad parameters!');
  }

  const client = new MongoClient(uri, clientOptions);

  try {
    await client.connect();
    logInfo('Connected!');

    db = client.db(dbName);
  } catch (e) {
    logInfo("Couldn't connect to DB!");
    throw e;
  }
};

export const getDB = () => db;
