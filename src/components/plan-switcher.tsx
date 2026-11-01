"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "./session";
import { useToast, Spinner } from "./ui";

// Demo-only plan switch wired to POST /api/plans (no payment gateway).
export default function PlanSwitcher() {
  const router = useRouter(); const toast = useToast();
  const [busy, setBusy] = useState(false);
  return (
    <button disabled={busy} onClick={async () => {
      setBusy(true);
      try {
        const d = await api("/api/plans", { method: "POST", body: JSON.stringify({ plan: "pro" }) });
        toast({ kind: "ok", text: `Demo Pro active — ${d.credits} credits. No money moved.` });
        router.push("/app"); router.refresh();
      } catch (e: any) {
        if (e.status === 401) { toast({ kind: "info", text: "Sign in first." }); router.push("/login?next=%2Fpricing"); }
        else toast({ kind: "err", text: e.message });
      } finally { setBusy(false); }
    }} className="btn-primary mt-6 w-full">
      {busy ? <Spinner /> : "Switch to Pro (demo — no charge)"}
    </button>
  );
}
