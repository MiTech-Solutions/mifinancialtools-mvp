import { useState } from "react";
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react";

const articles = [
  {
    id: "bond-repayment-guide",
    tag: "Home Loans",
    title: "How to calculate your bond repayment in South Africa",
    intro:
      "Planning to buy property? Understanding what your monthly bond repayment will look like is one of the most important steps before you sign anything. Here's how it works.",
    content: [
      {
        heading: "What is a bond repayment?",
        body: "A bond — also called a home loan or mortgage — is a loan from a bank to purchase property. The bank pays the seller, and you repay the bank over a fixed term, typically 20 years in South Africa, with interest added on top. Your monthly bond repayment covers both the principal (the amount borrowed) and the interest charged by the bank.",
      },
      {
        heading: "The three main variables",
        body: "Your monthly repayment is determined by three things: the loan amount (property price minus your deposit), the interest rate the bank offers you, and the repayment term. A larger deposit reduces your loan amount and therefore your monthly payment. A lower interest rate — which depends on your credit profile and the South African prime lending rate — also reduces what you pay each month. A longer term lowers monthly payments but significantly increases the total interest you pay over time.",
      },
      {
        heading: "How the calculation works",
        body: "Banks use a standard amortisation formula to calculate your instalment. Each month, interest is calculated on your remaining balance, with the rest of your payment reducing the principal. Early in the loan, most of your payment goes toward interest. Later, more goes toward the principal. This is why paying extra into your bond early on saves a significant amount over the life of the loan.",
      },
      {
        heading: "What the bank won't tell you upfront",
        body: "Your quoted monthly instalment typically excludes initiation fees (usually around R6,000 once-off), monthly admin fees (around R69/month), homeowner's insurance (required by the bank), and transfer costs if you're buying an existing home. These can add meaningfully to your total cost. Always request a full cost breakdown from your bank or bond originator before signing.",
      },
      {
        heading: "A practical starting point",
        body: "Use our Bond Repayment Calculator to estimate your monthly instalment. Enter the property price, your planned deposit, the expected interest rate (currently around prime which is 11.25% in 2025/26), and your preferred term. The result gives you a baseline to work from before approaching a bank for a formal quote.",
      },
    ],
  },
  {
    id: "car-loan-interest-guide",
    tag: "Vehicle Finance",
    title: "What interest rate should I use for a car loan in South Africa?",
    intro:
      "When estimating your car repayments, the interest rate you plug in makes a big difference. Here's how to find a realistic figure and what affects the rate you'll actually get.",
    content: [
      {
        heading: "What is the prime rate and why does it matter?",
        body: "Most vehicle finance in South Africa is priced relative to the prime lending rate — the benchmark rate set by major commercial banks, which moves in line with the South African Reserve Bank's repo rate decisions. As of 2025/26, the prime rate is 11.25%. Your car loan rate will typically be expressed as prime, prime minus a percentage (for strong credit profiles), or prime plus a percentage (for higher-risk applicants).",
      },
      {
        heading: "Typical car finance rates in South Africa",
        body: "For a salaried employee with a good credit score buying a new vehicle, rates of prime to prime plus 2% are common — putting you roughly in the 11.25% to 13.25% range. For used vehicles, rates are often slightly higher due to increased risk. For applicants with impaired credit, rates can go to prime plus 4% or higher. Dealer finance and bank finance can also differ, so it's worth getting quotes from both.",
      },
      {
        heading: "Fixed vs linked interest rates",
        body: "South African car loans are typically offered at a fixed interest rate for the full term, meaning your monthly instalment stays the same regardless of what happens to the prime rate. This is different from home loans, which are usually variable. When you take out car finance, the rate is locked in at whatever prime is at the time, so timing your purchase during a lower-rate environment can save you money.",
      },
      {
        heading: "What affects your rate?",
        body: "Banks assess your credit score, income stability, employment type, existing debt commitments, and the loan-to-value ratio (how much of the car price you're borrowing versus depositing). A larger deposit reduces the bank's risk and often results in a better rate. Buying a newer vehicle also tends to attract better rates than older models.",
      },
      {
        heading: "What rate to use when estimating",
        body: "As a conservative planning benchmark, use 13% to 14% when running estimates in our Car Repayment Calculator. This gives you a realistic worst-case figure to budget against. If you have a strong credit profile, you may qualify for something lower — but it's better to plan for a higher rate and be pleasantly surprised than the other way around.",
      },
    ],
  },
];

function ArticleCard({ article }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:border-cyan-400/20 sm:p-8">
      {/* Tag */}
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-3 py-1 text-xs font-medium text-cyan-300">
        <BookOpen size={12} />
        {article.tag}
      </div>

      {/* Title */}
      <h3 className="mt-4 text-xl font-semibold leading-snug text-white sm:text-2xl">
        {article.title}
      </h3>

      {/* Intro */}
      <p className="mt-3 text-sm leading-7 text-slate-400">{article.intro}</p>

      {/* Expanded content */}
      {expanded && (
        <div className="mt-6 space-y-5 border-t border-white/10 pt-6">
          {article.content.map((section) => (
            <div key={section.heading}>
              <h4 className="font-semibold text-white">{section.heading}</h4>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Toggle */}
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
      >
        {expanded ? (
          <>
            Read less <ChevronUp size={16} />
          </>
        ) : (
          <>
            Read article <ChevronDown size={16} />
          </>
        )}
      </button>
    </article>
  );
}

export default function ArticlesSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur">
            Guides &amp; articles
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Understanding the numbers behind the tools.
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Short, practical guides to help you understand how South African
            finance calculations work — so the results actually mean something.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
