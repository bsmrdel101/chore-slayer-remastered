const pg = require('pg');
require('dotenv').config();

let pool;

if (process.env.DATABASE_URL) {
  pool = new pg.Client(process.env.DATABASE_URL);
  pool.connect((err) => {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    pool.query('SELECT NOW() AS "theTime"', function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
    });
  });
} else {
  pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'chore_slayer',
    max: 10,
    idleTimeoutMillis: 30000,
  });
}


pool.on('error', (err) => {
  console.log('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;
