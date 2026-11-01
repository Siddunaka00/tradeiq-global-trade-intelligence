import Link from "next/link";
import { currentUser } from "@/lib/auth";
import { CreditPill, ThemeToggle, LoginLinks } from "@/components/chrome";
import { IconAnchor } from "@/components/icons";

// Full-bleed top bar shared by every marketing page. Server component — the
// credit pill renders only when a real session exists.
export default function MarketingHeader() {
  const me = currentUser();
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="text-copper"><IconAnchor className="h-5 w-5" /></span>
          <span className="serif text-[17px]">Harborline</span>
          <span className="label hidden sm:inline ml-1 -mb-0.5">IN · Trade desk</span>
        </Link>
        <nav className="ml-6 hidden items-center gap-5 text-sm text-muted lg:flex" aria-label="Marketing">
          <Link href="/buyers" className="hover:text-ink transition-colors duration-fast">Find buyers</Link>
          <Link href="/hs" className="hover:text-ink transition-colors duration-fast">HS lookup</Link>
          <Link href="/cost" className="hover:text-ink transition-colors duration-fast">Landed cost</Link>
          <Link href="/fta" className="hover:text-ink transition-colors duration-fast">FTA checker</Link>
          <Link href="/incentives" className="hover:text-ink transition-colors duration-fast">Incentives</Link>
          <Link href="/documents" className="hover:text-ink transition-colors duration-fast">Documents</Link>
          <Link href="/pricing" className="hover:text-ink transition-colors duration-fast">Pricing</Link>
        </nav>
        <div className="ml-auto flex items-center gap-2.5">
          {me ? (
            <>
              <CreditPill credits={me.credits} plan={me.plan} />
              <Link href="/app" className="btn-primary !py-1.5 text-[13px]">Open workspace</Link>
            </>
          ) : (
            <LoginLinks />
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export function MarketingFooter() {
  return (
    <footer className="mt-20 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm sm:grid-cols-3 sm:px-6">
        <div>
          <p className="serif text-base">Harborline</p>
          <p className="mt-2 max-w-xs text-muted">India-first import-export intelligence for small exporters and importers. Buyer access without the enterprise contract.</p>
        </div>
        <div>
          <p className="label mb-2">Tools</p>
          <ul className="space-y-1.5 text-muted">
            <li><Link href="/buyers" className="hover:text-copper">Buyer directory</Link></li>
            <li><Link href="/hs" className="hover:text-copper">HS code lookup</Link></li>
            <li><Link href="/cost" className="hover:text-copper">Landed-cost calculator</Link></li>
            <li><Link href="/fta" className="hover:text-copper">FTA checker</Link></li>
            <li><Link href="/incentives" className="hover:text-copper">Incentive finder</Link></li>
          </ul>
        </div>
        <div>
          <p className="label mb-2">Account</p>
          <ul className="space-y-1.5 text-muted">
            <li><Link href="/login" className="hover:text-copper">Log in</Link></li>
            <li><Link href="/register" className="hover:text-copper">Create account</Link></li>
            <li><Link href="/pricing" className="hover:text-copper">Pricing</Link></li>
            <li><Link href="/app/account" className="hover:text-copper">Data controls</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-4 text-center text-xs text-faint">
        Demonstration world: rates, buyers and contacts are seeded sample records, clearly labeled — verify against official notifications before shipping.
      </div>
    </footer>
  );
}
