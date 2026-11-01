import MarketingHeader, { MarketingFooter } from "@/components/marketing-header";
import HomeHero from "@/components/home-hero";

// Home — one strong headline, a live search that routes into buyer results,
// three proof points, then a single product walkthrough. No feature-card grid.
export default function HomePage() {
  return (
    <>
      <MarketingHeader />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
          <div className="mx-auto max-w-6xl px-4 pb-14 pt-16 sm:px-6 md:pt-24">
            <p className="label mb-4 text-copper">India · Import–Export desk</p>
            <h1 className="max-w-3xl text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.08] tracking-tight">
              From product idea to{" "}
              <em className="text-copper">verified overseas buyer</em> — with the landed cost, HS code, FTA saving and paperwork already done.
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
              Harborline is built for Indian SMEs. One terminal for buyer discovery, duty maths, incentives and trade documents — every number with a reason next to it.
            </p>
            <HomeHero />
          </div>
        </section>

        {/* THREE PROOF POINTS — numbered ledger rows, not identical cards */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6" aria-label="What Harborline does">
          <ol className="stagger divide-y divide-line border-y border-line">
            {[
              ["01", "Buyers you can actually contact.", "79 seeded verified-directory records across spices, rice, textiles, pharma, oils, dehydrated vegetables and engineering goods — USA to Benin. Names and products are always visible; contacts unlock with one credit."],
              ["02", "Duty maths without a consultant.", "Ex-works → FOB → CIF build-ups, MFN vs FTA side by side, RoDTEP and drawback rates per HS code. Every line item says where its rate came from."],
              ["03", "Documents that print.", "Proforma invoices, commercial invoices, packing lists and quotations prefilled from the buyer and HS record you were just looking at."],
            ].map(([n, t, d]) => (
              <li key={n} className="grid gap-2 py-6 sm:grid-cols-[64px_220px_1fr] sm:gap-6">
                <span className="serif text-2xl text-copper/70 num">{n}</span>
                <h2 className="serif text-lg leading-snug">{t}</h2>
                <p className="text-sm leading-relaxed text-muted">{d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* WALKTHROUGH — one horizontal flow, terminal style */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="serif text-2xl">The whole shipment, one thread</h2>
          <p className="mt-1.5 max-w-2xl text-sm text-muted">Every screen reads the same records. Search a buyer, and the calculator, FTA checker and document studio all know who you&rsquo;re talking about.</p>
          <div className="card mt-8 overflow-x-auto">
            <pre className="min-w-[560px] px-5 py-5 font-mono text-[13px] leading-7 text-ink" aria-label="Product walkthrough diagram">{`search &quot;cumin USA&quot; ──► buyer split view ──► unlock (1 credit)
                              │ audit line: unlocked by you, source noted
                              ▼
                    match 87/100 · HS 090921 ──► HS workspace ──► FTA: none on file → MFN 5%
                              │                                   incentives: RoDTEP 4% (sample)
                              ▼
                    landed cost ₹ ex-works→CIF ──► save scenario ──► proforma prefilled ──► print PDF`}</pre>
          </div>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <a href="/buyers?q=cumin" className="btn-primary">Try a live buyer search</a>
            <a href="/cost" className="btn-ghost">Open the cost calculator</a>
            <a href="/pricing" className="btn-quiet">See pricing →</a>
          </div>
        </section>

        {/* WHY THIS EXISTS — research constraints, stated plainly */}
        <section className="border-y border-line bg-panel/60">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="serif text-xl">Why this exists</h2>
            <div className="mt-5 grid gap-x-10 gap-y-4 text-sm leading-relaxed text-muted md:grid-cols-2">
              <p><span className="font-medium text-ink">Access without the enterprise contract.</span> Trade databases lock SMEs behind five-figure annual deals. Here, a monthly credit pack buys exactly the unlocks you use.</p>
              <p><span className="font-medium text-ink">No black boxes.</span> Match scores decompose into product fit, market, completeness and recency — each with a sentence. Duty numbers name their table.</p>
              <p><span className="font-medium text-ink">Directory, not scrape.</span> Contacts carry a verification date and an audit line saying who unlocked them and when.</p>
              <p><span className="font-medium text-ink">Your data stays yours.</span> Export everything as JSON or delete the account from settings — sessions, unlocks and documents go with it.</p>
              <p><span className="font-medium text-ink">It teaches while it automates.</span> HS and incentive pages carry plain-language notes on what the code means for your shipment.</p>
              <p><span className="font-medium text-ink">Phone-first.</span> Small exporters live on mobile; every working screen is designed at 390&nbsp;px first.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <h2 className="serif text-2xl">Open the terminal.</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted">Three free buyer unlocks on signup. No card.</p>
          <div className="mt-5 flex justify-center gap-3">
            <a href="/register" className="btn-primary">Create free account</a>
            <a href="/login" className="btn-ghost">Use the demo login</a>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}
