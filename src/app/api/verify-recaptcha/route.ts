import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { token } = await req.json();
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!token || !secret) {
    return new Response(
      JSON.stringify({ message: "Missing token or secret" }),
      {
        status: 400,
      }
    );
  }

  const verify = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`,
    }
  );

  const data = await verify.json();

  if (!data.success) {
    return new Response(JSON.stringify({ message: "Invalid token" }), {
      status: 403,
    });
  }

  return new Response(JSON.stringify({ success: true, score: data.score }), {
    status: 200,
  });
}
