import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const data = await req.json()
  // TODO: Replace with email provider / CRM integration
  console.log("Contact form submission:", data)
  return NextResponse.json({ ok: true })
}