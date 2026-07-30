export const compoundInterestContent = {
  intro: [
    "Compound interest is often called the most powerful force in personal finance, and for good reason — it's the mechanism behind almost every long-term savings and investment strategy, from a simple savings account to a retirement annuity or unit trust. The Compound Interest Calculator lets you enter a starting amount, a monthly contribution, an expected annual return, and a time horizon, and instantly see what your investment could grow to.",
    "This tool is built for anyone starting a savings plan, comparing what happens if they invest a lump sum versus contributing monthly, or simply trying to understand how much time and consistency matter compared to the size of any single contribution. It's equally useful for a 25-year-old starting a retirement annuity and a parent saving for a child's education over 15 years.",
    "It's a projection, not a guarantee — real investment returns fluctuate year to year — but it shows you the mechanics clearly enough to set realistic expectations and goals.",
  ],
  howItWorks: {
    paragraphs: [
      "The calculator starts with your initial investment and, month by month, applies your expected annual return (converted to a monthly rate) and then adds your monthly contribution, compounding this process across the full number of months in your chosen time horizon.",
      "The key insight compound interest reveals is that growth builds on growth: the interest you earn in month one starts earning its own interest in month two, and so on. Over short periods this barely matters, but over 10, 20, or 30 years, it becomes the dominant driver of your final balance — often contributing more to your total than your own contributions did.",
    ],
    inputs: [
      { label: "Initial investment", desc: "The lump sum you're starting with, if any." },
      { label: "Monthly contribution", desc: "The amount you plan to add every month." },
      { label: "Expected annual return", desc: "Your assumed yearly growth rate, before fees and tax." },
      { label: "Investment period", desc: "How many years you plan to stay invested." },
    ],
    outputs: [
      { label: "Projected future value", desc: "Your estimated total balance at the end of the period." },
      { label: "Total contributions", desc: "The sum of your initial investment plus every monthly contribution made." },
      { label: "Estimated growth", desc: "Future value minus total contributions — the amount compounding actually added." },
    ],
  },
  formula: {
    paragraphs: [
      "This calculator compounds monthly and adds each contribution at the end of the month, which is the standard approach for modelling regular monthly investing (an ordinary annuity). Written as a single closed-form equation, it looks like this:",
    ],
    expression: "FV = P × (1 + r)^n + PMT × [((1 + r)^n − 1) / r]",
    variables: [
      { symbol: "FV", meaning: "future value (projected balance)" },
      { symbol: "P", meaning: "initial investment" },
      { symbol: "PMT", meaning: "monthly contribution" },
      { symbol: "r", meaning: "monthly rate of return (annual rate ÷ 12 ÷ 100)" },
      { symbol: "n", meaning: "number of months (years × 12)" },
    ],
  },
  examples: [
    {
      title: "Example 1: Starting small, staying consistent",
      scenario:
        "An investor starts with R5,000 and contributes R1,500 every month for 10 years, assuming a 12% average annual return — a reasonable long-term equity benchmark.",
      steps: [
        "Total contributions = R5,000 + (R1,500 × 120 months) = R185,000",
        "Applying the formula with monthly compounding at 1% per month over 120 months",
        "Projected future value comes to roughly R361,600",
      ],
      result:
        "Estimated growth ≈ R176,600 — meaning compounding added almost as much as the investor actually contributed over the 10 years.",
    },
    {
      title: "Example 2: The same plan, extended to 20 years",
      scenario:
        "Same R5,000 start and R1,500 monthly contribution at 12%, but held for 20 years instead of 10.",
      steps: [
        "Total contributions = R5,000 + (R1,500 × 240 months) = R365,000",
        "Over 240 months at 1% per month, the growth compounds on itself for twice as long",
        "Projected future value comes to roughly R1,538,300",
      ],
      result:
        "Estimated growth ≈ R1,173,300 — more than 6 times the growth of the 10-year example, despite contributions only doubling. This is compounding's effect over time, not a bigger contribution.",
    },
    {
      title: "Example 3: Lump sum only, no monthly contributions",
      scenario:
        "An investor puts a single R100,000 lump sum in at 12% for 15 years and adds nothing further.",
      steps: [
        "No monthly contributions, so total contributions = R100,000",
        "Future value = R100,000 × (1.01)^180",
        "Projected future value comes to roughly R599,600",
      ],
      result:
        "Estimated growth ≈ R499,600 from a single deposit — showing that even without ongoing contributions, time and rate of return alone drive substantial growth.",
    },
  ],
  benefits: [
    "See exactly how much time in the market matters compared to the size of your contributions.",
    "Compare a lump sum, a monthly contribution plan, or a mix of both before committing to a savings product.",
    "Set realistic long-term goals for a retirement annuity, education fund, or general investment account.",
    "Understand how much of your final balance is your own money versus growth from compounding.",
  ],
  mistakes: [
    {
      title: "Using an unrealistic return assumption",
      body: "Equity markets can return 12%+ in strong years but average closer to 8–10% net of fees over the long term in many portfolios. Run the calculator at a conservative rate as well as an optimistic one to see a realistic range.",
    },
    {
      title: "Ignoring fees and tax",
      body: "This calculator projects gross growth. Investment platform fees, fund management fees, and tax on interest or capital gains (outside a tax-free savings account) will reduce your actual take-home growth.",
    },
    {
      title: "Underestimating the effect of starting late",
      body: "As Example 2 shows, doubling your time horizon can multiply your growth many times over. Delaying a savings plan by even five years can cost significantly more than it appears to at first glance.",
    },
    {
      title: "Stopping contributions during market dips",
      body: "Pausing monthly contributions when markets fall means missing out on buying at lower prices, which historically has been one of the best times to keep investing consistently.",
    },
  ],
  faqs: [
    {
      q: "What return rate should I use?",
      a: "For a diversified equity-heavy portfolio, 8–12% per year (before fees) is a commonly used long-term planning range in South Africa. For more conservative, cash-heavy portfolios, use a lower figure closer to 6–8%.",
    },
    {
      q: "Does this account for inflation?",
      a: "No — this is a nominal projection. To estimate real (inflation-adjusted) growth, subtract South Africa's average inflation rate (historically around 5–6%) from your assumed return before entering it.",
    },
    {
      q: "Is it better to invest a lump sum or monthly contributions?",
      a: "Both work — a lump sum invested earlier has more time to compound, while monthly contributions build discipline and smooth out market timing. Many investors do both: an initial lump sum plus ongoing monthly amounts, which this calculator supports directly.",
    },
    {
      q: "Does this include tax-free savings account limits?",
      a: "No — this is a general growth calculator. If you're using a tax-free savings account, remember South Africa currently caps contributions at R36,000 per tax year and R500,000 over your lifetime.",
    },
    {
      q: "Why does the growth amount look bigger than my contributions in later years?",
      a: "This is compounding at work — as your balance grows, the same percentage return produces a larger rand amount each year, and that larger amount itself starts earning further growth.",
    },
  ],
  relatedTools: [
    {
      label: "Bond Repayment Calculator",
      path: "/bond-repayment",
      description: "See what a home loan would cost before you commit savings elsewhere.",
    },
    {
      label: "Car Repayment Calculator",
      path: "/car-repayment",
      description: "Estimate monthly vehicle finance repayments.",
    },
    {
      label: "Income Tax Calculator",
      path: "/income-tax",
      description: "Work out how much you can realistically afford to invest each month.",
    },
  ],
  relatedGuides: [
    {
      label: "Compound Interest Explained",
      path: "/guides/compound-interest-explained",
      description: "The full concept behind long-term investment growth.",
    },
    {
      label: "How to Save Money",
      path: "/guides/saving-money",
      description: "Concrete tactics for saving consistently in South Africa.",
    },
    {
      label: "Investing Basics",
      path: "/guides/investing-basics",
      description: "Asset classes, risk, and diversification explained.",
    },
    {
      label: "Retirement Planning",
      path: "/guides/retirement-planning",
      description: "How retirement contributions grow through compounding.",
    },
    {
      label: "Budgeting Basics",
      path: "/guides/budgeting",
      description: "Work out how much you can realistically set aside to invest.",
    },
  ],
};
