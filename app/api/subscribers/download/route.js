import { NextResponse } from "next/server";
import fs from "fs/promises";
import { EXCEL_FILE } from "@/lib/subscribers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Sirf local-Excel mode ke liye: /api/subscribers/download?key=ADMIN_KEY
// Google Sheet mode me data seedha Sheet me hota hai (File -> Download -> .xlsx).
export async function GET(request) {
  const adminKey = process.env.ADMIN_KEY;
  const key = new URL(request.url).searchParams.get("key");

  if (!adminKey || key !== adminKey) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  if (process.env.SHEET_WEBHOOK_URL) {
    return NextResponse.json(
      { error: "Emails Google Sheet me save ho rahe hain. Sheet se File -> Download -> .xlsx use karo." },
      { status: 400 }
    );
  }

  try {
    const file = await fs.readFile(EXCEL_FILE);
    return new NextResponse(file, {
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": 'attachment; filename="aangan-subscribers.xlsx"',
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "No subscribers yet." }, { status: 404 });
  }
}
