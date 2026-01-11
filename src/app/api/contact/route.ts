import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  if (!body.email || !body.message) {
    return NextResponse.json(
      { ok: false, message: "Missing required fields." },
      { status: 400 },
    );
  }

  return NextResponse.json({ ok: true });
}
