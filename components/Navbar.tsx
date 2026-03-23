import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07130c]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-xl font-black text-[#07130c] shadow-glow">
            ⚽
          </div>
          <div>
            <div className="text-lg font-extrabold tracking-tight text-white">Baller</div>
            <div className="text-xs uppercase tracking-[0.25em] text-pitch-300">Football Intelligence</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <a href="#coverage" className="transition hover:text-white">Coverage</a>
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#pricing" className="transition hover:text-white">Pricing</a>
          <a href="#faq" className="transition hover:text-white">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://x.com/BallerIntel"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/90 transition hover:border-white/40 hover:text-white sm:inline-flex"
          >
            Follow @BallerIntel
          </a>
          <a
            href="https://app.virtuals.io/acp/agents/ld1x2z9ku4uwhbqiw5a2jcv7"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-[#07130c] transition hover:brightness-105"
          >
            Use on Virtuals ACP
          </a>
        </div>
      </div>
    </header>
  );
}
