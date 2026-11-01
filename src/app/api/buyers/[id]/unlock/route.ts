import { NextResponse } from "next/server";
import { currentUserFromRequest } from "@/lib/auth";
import { db, log } from "@/lib/db";

// Atomic credit deduction + unlock record. Survives refresh; double-unlock is free.
export async function POST(req: Request, { params }: { params: { id: string } }) {
  const user = currentUserFromRequest(req);
  if (!user) return NextResponse.json({ error: "Sign in to unlock contacts." }, { status: 401 });
  const id = Number(params.id);
  const d = db();
  const buyer = d.prepare("SELECT id, company_name FROM buyers WHERE id=?").get(id) as any;
  if (!buyer) return NextResponse.json({ error: "Buyer not found." }, { status: 404 });
  const existing = d.prepare("SELECT 1 FROM unlocks WHERE user_id=? AND buyer_id=?").get(user.id, id);
  if (existing) return NextResponse.json({ ok: true, alreadyUnlocked: true, credits: user.credits });
  if (user.credits <= 0) return NextResponse.json({ error: "No credits left. Upgrade on the Pricing page to keep unlocking.", code: "NO_CREDITS" }, { status: 402 });
  try {
    d.transaction(() => {
      const upd = d.prepare("UPDATE users SET credits = credits - 1 WHERE id = ? AND credits > 0").run(user.id);
      if (upd.changes === 0) throw new Error("RACE");
      d.prepare("INSERT INTO unlocks (user_id, buyer_id) VALUES (?,?)").run(user.id, id);
    });
  } catch {
    return NextResponse.json({ error: "Could not deduct a credit — please retry." }, { status: 409 });
  }
  log(user.id, "unlock", `buyer ${id}: ${buyer.company_name}`);
  const now = d.prepare("SELECT credits FROM users WHERE id=?").get(user.id) as any;
  return NextResponse.json({ ok: true, credits: now.credits });
}
