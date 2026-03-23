const stats = [
  { value: "299", label: "Leagues covered" },
  { value: "4,685", label: "Teams tracked" },
  { value: "40k+", label: "Injury records" },
  { value: "4x daily", label: "Refresh cadence" },
];

const features = [
  {
    title: "League briefings that agents can actually use",
    description:
      "Standings, current form, injury context, squad vulnerability flags, upcoming fixtures and predicted starting XIs in a single response.",
  },
  {
    title: "Built for edge, not just coverage",
    description:
      "Baller is designed for betting agents, fantasy tools, trading agents and analysts who want breadth and actionable context, not raw spreadsheets.",
  },
  {
    title: "World Cup 2026 ready",
    description:
      "International tournaments sit alongside domestic leagues and continental competitions, so you can move from club football to the World Cup without changing tools.",
  },
  {
    title: "Low-friction distribution via ACP",
    description:
      "Available right now on Virtuals ACP at $1.50 per query, with no heavy integration needed to start testing demand.",
  },
  {
    title: "Fresh enough for matchdays",
    description:
      "Baller refreshes four times a day so injuries, fixtures and squad context stay useful around European evenings and major match windows.",
  },
  {
    title: "A clean API-backed product, not a prompt wrapper",
    description:
      "The engine runs on structured football data with league-level analysis, so the output can become a product, a bot, a feed or a research layer.",
  },
];

const examples = [
  {
    title: "Premier League briefing",
    body:
      "Form leaders, injury concentration by squad, fixtures this week and projected XIs for clubs in the title race or relegation scrap.",
  },
  {
    title: "World Cup snapshot",
    body:
      "Tournament-wide intelligence with squad availability, group trends and upcoming fixture context ahead of knockout phases.",
  },
  {
    title: "Betting / fantasy scan",
    body:
      "Quick signal on weakened back lines, overloaded squads and teams showing vulnerability flags before you price a slate or build a lineup.",
  },
];

const faqs = [
  {
    question: "Who is Baller for?",
    answer:
      "Baller is built for betting agents, fantasy football tools, football traders, analysts and builders who need structured football intelligence fast.",
  },
  {
    question: "What does a query return?",
    answer:
      "A typical league briefing includes standings, form, injuries, vulnerability flags, fixtures and predicted XIs for the league you request.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Baller is available on Virtuals ACP for $1.50 per query.",
  },
  {
    question: "How often is the data refreshed?",
    answer:
      "Four times daily, with infrastructure already set up for broader coverage and higher cadence if demand justifies it.",
  },
];

export default function Home() {
  return (
    <>
      <section className="overflow-hidden px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
              <span>⚽</span>
              Football intelligence for 299 leagues
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              The football data edge for betting agents, fantasy tools and analysts.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              Baller turns league data into usable intelligence: injuries, form ratings,
              fixtures, squad vulnerability flags and predicted XIs across 299 leagues,
              including World Cup 2026 coverage.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://app.virtuals.io/acp/agents/ld1x2z9ku4uwhbqiw5a2jcv7"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-base font-extrabold text-[#07130c] transition hover:brightness-105"
              >
                Use Baller on Virtuals ACP
              </a>
              <a
                href="https://x.com/BallerIntel"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-base font-semibold text-white transition hover:border-white/40"
              >
                Follow @BallerIntel
              </a>
            </div>
            <div className="mt-6 text-sm text-white/50">
              $1.50 per query • 4x daily refresh • 40,000+ injury records
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-pitch-500/15 blur-3xl" />
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur">
              <div className="mb-4 flex items-center justify-between text-sm text-white/50">
                <span>Sample briefing output</span>
                <span className="rounded-full bg-pitch-500/20 px-3 py-1 text-pitch-200">league_briefing</span>
              </div>
              <div className="space-y-4 text-sm leading-7 text-white/85">
                <div>
                  <div className="font-bold text-accent">Premier League — quick scan</div>
                  <div>Arsenal and Liverpool remain strong on form metrics, while two mid-table squads show elevated injury concentration in defence.</div>
                </div>
                <div>
                  <div className="font-bold text-accent">Vulnerability flags</div>
                  <div>Three clubs flag as vulnerable this week due to absences in central defence and compressed fixture schedules.</div>
                </div>
                <div>
                  <div className="font-bold text-accent">Fixtures and XIs</div>
                  <div>Upcoming match window highlights likely starting XIs and availability context before odds or fantasy locks move.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/20 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-accent sm:text-4xl">{stat.value}</div>
              <div className="mt-2 text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="coverage" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-pitch-300">Coverage</div>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Domestic leagues, continental competitions and tournament coverage in one product.</h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Baller covers the big five, lower divisions, continental cups, international competitions and a long tail of global leagues. The point is simple: broader coverage than niche football agents, with enough structure to be commercially useful.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Premier League, Championship, League One and deeper UK coverage",
              "Champions League, Europa League and Conference League",
              "La Liga, Serie A, Bundesliga, Ligue 1, Eredivisie, Primeira Liga",
              "MLS, Brasileirão, Liga MX, Saudi Pro League, J1, K League and more",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/75">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="bg-white/5 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-pitch-300">Features</div>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Everything Baller is meant to signal in a single query.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-white/10 bg-black/20 p-6">
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-pitch-300">Use cases</div>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">The output is meant to be consumed, not admired.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {examples.map((example) => (
              <div key={example.title} className="rounded-3xl border border-accent/15 bg-accent/5 p-6">
                <h3 className="text-xl font-bold text-white">{example.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{example.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-pitch-700/70 to-[#09130b] p-8 text-center shadow-glow sm:p-12">
          <div className="text-sm font-bold uppercase tracking-[0.3em] text-pitch-300">Pricing</div>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Simple enough to test. Serious enough to scale.</h2>
          <div className="mt-8 text-6xl font-black text-accent">$1.50</div>
          <div className="mt-2 text-lg text-white/75">per query on Virtuals ACP</div>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/65">
            Start with league briefings today. As demand sharpens, Baller can expand into bot workflows, scheduled alerts, niche feeds and custom football intelligence products.
          </p>
          <a
            href="https://app.virtuals.io/acp/agents/ld1x2z9ku4uwhbqiw5a2jcv7"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-accent px-8 py-4 text-base font-extrabold text-[#07130c] transition hover:brightness-105"
          >
            Open Baller on Virtuals ACP
          </a>
        </div>
      </section>

      <section id="faq" className="border-t border-white/10 bg-black/20 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-pitch-300">FAQ</div>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">A few sensible questions.</h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-bold text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
