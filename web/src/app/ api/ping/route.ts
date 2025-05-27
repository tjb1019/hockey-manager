import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const response = await fetch('http://localhost:5000/api/ping');
  const payload = await response.json();
  return payload;
}