import mysql from 'mysql2/promise';

async function main() {
  const connection = await mysql.createConnection({
    host: 'dev-1-db.crs444egi3hp.us-east-2.rds.amazonaws.com',
    user: 'pinadmin',
    password: 'd5gbU7sBhBi0NyAT9eHa',
    database: 'pincodes',
  });

  const [rows] = await connection.execute('SELECT * FROM Voucher');
  console.log(rows);

  await connection.end();
}

main().catch(console.error);
