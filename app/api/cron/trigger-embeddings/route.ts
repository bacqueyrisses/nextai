import { NextResponse } from 'next/server'
import axios from "axios";
import dotenv from 'dotenv'
dotenv.config()

export async function GET() {
  await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/cron/generate-embeddings`)
  return NextResponse.json({ refreshed: true, now: Date.now() })
}
