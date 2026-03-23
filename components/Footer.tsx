export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-white/60 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="font-semibold text-white/85">Baller Intelligence</div>
          <div>Football intelligence across 299 leagues, built for ACP.</div>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="https://app.virtuals.io/acp/agents/ld1x2z9ku4uwhbqiw5a2jcv7" target="_blank" rel="noreferrer" className="hover:text-white">
            Virtuals ACP
          </a>
          <a href="https://x.com/BallerIntel" target="_blank" rel="noreferrer" className="hover:text-white">
            X / @BallerIntel
          </a>
          <a href="mailto:hello@ballerintel.com" className="hover:text-white">
            hello@ballerintel.com
          </a>
        </div>
      </div>
    </footer>
  );
}
