import { NextResponse } from "next/server";
import { currentUserFromRequest } from "@/lib/auth";
import { db, log } from "@/lib/db";

// Demo plan switcher: buying Pro on the pricing page tops up credits and flips
// plan. No payment gateway in this build — clearly labeled as a demo action.
export async function POST(req: Request) {
  const user = currentUserFromRequest(req);
  if (!user) return NextResponse.json({ error: "Sign in to change your plan." }, { status: 401 });
  const { plan } = await req.json().catch(() => ({ plan: "pro" }));
  if (plan !== "pro") return NextResponse.json({ error: "Unknown plan." }, { status: 400 });
  db().prepare("UPDATE users SET plan='pro', credits = credits + 25 WHERE id=?").run(user.id);
  log(user.id, "plan_upgrade", "pro (+25 credits, demo)");
  const now = db().prepare("SELECT plan, credits FROM users WHERE id=?").get(user.id) as any;
  return NextResponse.json({ ok: true, ...now });
}
