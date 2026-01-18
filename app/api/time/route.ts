import { NextResponse } from 'next/server';

export async function GET() {
  // Add a small delay to make timing differences more visible
  await new Promise(resolve => setTimeout(resolve, 100));

  const timestamp = new Date().toISOString();
  const randomNumber = Math.floor(Math.random() * 1000);

  return NextResponse.json({
    timestamp,
    randomNumber,
    message: 'This data is generated on the server'
  });
}
