import Link from "next/link";
import MarketingHeader, { MarketingFooter } from "@/components/marketing-header";
import PlanSwitcher from "@/components/plan-switcher";

export const metadata = { title: "Pricing" };

const FREE = ["3 buyer unlocks included", "Full directory search — names & products always free", "HS lookup, landed cost, FTA & incentive tools", "Document drafts (print yourself)", "Saved buyers & outreach list"];
const PRO = ["Everything in Free", "25 buyer unlocks on activation", "Pro badge on your workspace", "Scenario saving without limits", "Priority answers in Ask Harborline"];

export default function PricingPage() {
  return (
    <>
      <MarketingHeader />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 className="serif text-4xl">Pricing</h1>
        <p className="mt-2 max-w-xl text-sm text-muted">Search and every calculator are free forever. You only pay when you reveal a contact — one credit, one buyer, yours to keep.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="lift card p-6">
            <p className="label">Free desk</p>
            <p className="serif mt-1 text-3xl">₹0</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">{FREE.map(x => <li key={x} className="flex gap-2"><span className="text-copper">›</span>{x}</li>)}</ul>
            <Link href="/register" className="btn-ghost mt-6 w-full">Create free account</Link>
          </div>
          <div className="lift card relative border-copper/60 p-6 ring-1 ring-copper/25">
            <span className="absolute -top-2.5 left-5 chip chip-on">recommended</span>
            <p className="label text-copper">Pro desk</p>
            <p className="serif mt-1 text-3xl">₹1,990<span className="text-base text-muted">/mo</span></p>
            <p className="num mt-1 text-xs text-faint">≈ ₹80 per unlock · cancel anytime</p>
            <ul className="mt-4 space-y-2 text-sm">{PRO.map(x => <li key={x} className="flex gap-2"><span className="text-copper">›</span>{x}</li>)}</ul>
            <PlanSwitcher />
          </div>
        </div>
        <p className="mt-6 rounded-field border border-warn/40 bg-warn/5 px-4 py-3 text-[13px] leading-relaxed text-warn">
          This build has no payment gateway. The “Switch to Pro” action is a clearly-labeled demo that flips your plan and adds 25 credits in the local database — it charges nothing. Real billing is a listed backend integration point.
        </p>
        <section className="mt-12">
          <h2 className="serif text-xl">Questions</h2>
          <dl className="mt-4 divide-y divide-line border-y border-line text-sm">
            {[["Do saved or searched buyers cost credits?", "No. Names, cities, products, verification dates and match scores are free. Only direct contacts unlock, at 1 credit each."],
              ["What if I run out of credits?", "Tools keep working; unlocks pause until you top up. Nothing you already unlocked disappears."],
              ["Is the data live?", "This is a seeded demonstration world — buyers, rates and incentives are labeled sample records. The README lists the real-data adapters planned as backend work."],
              ["Can I export my data?", "Yes — full JSON export and one-click account deletion in Account & data."]]
              .map(([q, a]) => (<div key={q} className="py-3.5"><dt className="font-medium">{q}</dt><dd className="mt-1 text-muted">{a}</dd></div>))}
          </dl>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}
