import pg from 'pg-promise/typescript/pg-subset';
import pgp from 'pg-promise';
import dbConfig from './config/dbConfig';

const initializedPgPromise: pgp.IMain<{}, pg.IClient> = pgp();

const db = initializedPgPromise(dbConfig);

export default db;