import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function POST(request: NextRequest) {
  const { code } = await request.json();

  // Connect to your DB (reuse your db config)
  const connection = await mysql.createConnection({
    host: 'dev-1-db.crs444egi3hp.us-east-2.rds.amazonaws.com',
    user: 'pinadmin',
    password: 'd5gbU7sBhBi0NyAT9eHa',
    database: 'pincodes',
  });

  const [rows] = await connection.execute(
    'SELECT 1 FROM Voucher WHERE UniqueCode = ? AND Active = 1 AND IsRedeemed = 0 LIMIT 1',
    [code]
  );
  await connection.end();

  if ((rows as unknown[]).length > 0) {
    return NextResponse.json({ exists: true });
  } else {
    return NextResponse.json({ exists: false });
  }
}
