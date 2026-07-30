export const incomeTaxContent = {
  intro: [
    "Understanding exactly how much of your salary you actually take home — after PAYE tax, UIF, rebates, and any deductions — is one of the most practical things you can do for your budget, whether you're evaluating a new job offer, negotiating a raise, or just trying to plan your monthly finances properly. The Income Tax Calculator uses the official SARS 2025/26 tax tables to work out your PAYE tax, UIF, and net take-home pay from your gross salary.",
    "This tool is built for salaried employees who want to see their real monthly take-home pay, job seekers comparing a monthly versus annual salary offer, and anyone contributing to a retirement annuity or medical aid who wants to see exactly how much those contributions reduce their tax bill.",
    "It reflects the actual SARS brackets, primary rebate, medical tax credits, and UIF rules for the 2025/26 tax year (1 March 2025 – 28 February 2026) — not a rough estimate.",
  ],
  howItWorks: {
    paragraphs: [
      "You enter your gross salary (monthly or annual), your age group, any annual retirement annuity or pension contribution, and how many people are covered under your medical aid. The calculator first works out your annual gross income, then subtracts your retirement contribution (capped at 27.5% of gross income, as SARS requires) to arrive at your taxable income.",
      "It applies the correct SARS tax bracket to that taxable income to get your gross tax, then subtracts your primary rebate (and secondary/tertiary rebates if you're 65 or older) and any medical scheme tax credits you qualify for, to arrive at your final annual tax payable. UIF is calculated separately at 1% of your monthly salary, capped at a maximum monthly salary of R17,711.58.",
    ],
    inputs: [
      { label: "Gross salary", desc: "Your salary before any deductions, entered as monthly or annual." },
      { label: "Age group", desc: "Determines which SARS rebate(s) you qualify for." },
      { label: "RA / pension contribution", desc: "Annual retirement contribution, which reduces your taxable income (capped at 27.5% of gross income)." },
      { label: "Medical aid members", desc: "Number of people on your medical scheme, including yourself, which determines your monthly medical tax credit." },
    ],
    outputs: [
      { label: "Monthly take-home pay", desc: "Your salary after PAYE tax and UIF are deducted." },
      { label: "Monthly PAYE tax & UIF", desc: "The two statutory monthly deductions from your salary." },
      { label: "Effective tax rate", desc: "Your total annual tax as a percentage of your taxable income." },
      { label: "Marginal tax rate", desc: "The tax rate applied to your next rand earned, based on your current bracket." },
    ],
  },
  formula: {
    paragraphs: [
      "South Africa uses a progressive tax system: each bracket of your income is taxed at its own rate, not your whole income at the top rate. SARS publishes each bracket as a base amount plus a rate applied to income above that bracket's threshold, which is what the calculator uses directly:",
    ],
    expression: "Tax = Bracket base + (Bracket rate × (Taxable income − Bracket minimum))",
    variables: [
      { symbol: "Bracket base", meaning: "the cumulative tax already due at the start of that bracket" },
      { symbol: "Bracket rate", meaning: "the marginal rate for that bracket (18% up to 45% for 2025/26)" },
      { symbol: "Taxable income", meaning: "annual gross income minus RA/pension contributions" },
      { symbol: "Final tax payable", meaning: "gross tax minus rebates minus medical tax credits" },
    ],
  },
  examples: [
    {
      title: "Example 1: R25,000 a month, no RA, no medical aid",
      scenario:
        "A salaried employee earning R25,000 gross per month, under 65, with no retirement contributions or medical aid.",
      steps: [
        "Annual gross income = R25,000 × 12 = R300,000 (fully taxable, no RA deduction)",
        "Gross tax on R300,000 = R59,032 (18% and 26% brackets)",
        "After the R17,235 primary rebate: annual tax payable = R41,797",
      ],
      result:
        "Monthly PAYE ≈ R3,483, monthly UIF ≈ R177, giving a monthly take-home of ≈ R21,340 — an effective tax rate of 13.9% and a marginal rate of 26%.",
    },
    {
      title: "Example 2: R45,000 a month, no RA, no medical aid",
      scenario:
        "A salaried employee earning R45,000 gross per month, under 65, with no retirement contributions or medical aid.",
      steps: [
        "Annual gross income = R45,000 × 12 = R540,000",
        "Gross tax on R540,000 = R131,267 (crossing into the 36% bracket)",
        "After the R17,235 primary rebate: annual tax payable = R114,032",
      ],
      result:
        "Monthly PAYE ≈ R9,503, monthly UIF ≈ R177 (capped), giving a monthly take-home of ≈ R35,320 — an effective tax rate of 21.1% and a marginal rate of 36%.",
    },
    {
      title: "Example 3: Same R45,000 salary, but with RA and medical aid",
      scenario:
        "Same R45,000-a-month earner as Example 2, now contributing R4,500/month (R54,000/year) to a retirement annuity and covering 2 people on medical aid.",
      steps: [
        "Taxable income drops to R540,000 − R54,000 = R486,000",
        "Gross tax on R486,000 = R113,167",
        "After the R17,235 rebate and R8,736 in annual medical tax credits (2 members × R364 × 12): annual tax payable = R87,196",
      ],
      result:
        "Monthly take-home rises to ≈ R37,557 — about R2,237 more per month than Example 2 — purely from the RA contribution and medical credits reducing taxable income and tax owed.",
    },
  ],
  benefits: [
    "See your real monthly take-home pay instantly, based on the actual current SARS tax tables.",
    "Understand exactly how much a retirement annuity contribution reduces your tax bill, not just your savings balance.",
    "Compare a monthly salary offer against an annual package figure without doing the maths by hand.",
    "See both your effective rate (what you actually pay overall) and your marginal rate (what your next rand of income is taxed at) — two very different numbers people often confuse.",
  ],
  mistakes: [
    {
      title: "Confusing marginal rate with effective rate",
      body: "Many people assume their whole salary is taxed at their top bracket's rate. In reality only the portion of income within that bracket is taxed at that rate — your effective rate (total tax ÷ taxable income) is always lower than your marginal rate.",
    },
    {
      title: "Forgetting the 27.5% cap on RA contributions",
      body: "SARS only allows retirement contributions up to 27.5% of your gross income (capped further at R350,000/year in absolute terms) to reduce your taxable income. Contributions above that don't reduce this year's tax, though they can be carried forward.",
    },
    {
      title: "Not accounting for medical tax credits",
      body: "Medical scheme fees themselves aren't tax-deductible for most salaried employees, but SARS gives a fixed monthly tax credit per medical aid member, which directly reduces the tax you owe — easy to overlook when estimating take-home pay.",
    },
    {
      title: "Using last year's tax brackets",
      body: "SARS brackets, rebates, and medical credits are adjusted almost every tax year. A calculation done with outdated figures can be meaningfully wrong, especially near a bracket boundary.",
    },
  ],
  faqs: [
    {
      q: "What tax year does this calculator use?",
      a: "It uses the SARS 2025/26 tax year, running from 1 March 2025 to 28 February 2026, including that year's brackets, rebates, and medical tax credit values.",
    },
    {
      q: "What's the difference between effective and marginal tax rate?",
      a: "Your marginal rate is what your next rand of income would be taxed at, based on your current bracket. Your effective rate is your total tax paid divided by your total taxable income — always lower, since earlier brackets are taxed at lower rates.",
    },
    {
      q: "Does this include employer UIF and other employer contributions?",
      a: "No — this calculator shows your personal UIF deduction (1% of salary, capped) and PAYE tax only. It doesn't include employer-side contributions or benefits like a pension employer match.",
    },
    {
      q: "How much can I contribute to a retirement annuity to reduce my tax?",
      a: "SARS allows a tax deduction on contributions up to 27.5% of your gross remuneration, capped at R350,000 per tax year. This calculator applies that percentage cap automatically.",
    },
    {
      q: "What are medical tax credits and how are they calculated?",
      a: "For 2025/26, SARS gives a fixed monthly credit of R364 for the main member and first dependent, and R246 for each additional dependent, regardless of how much you actually pay in premiums.",
    },
    {
      q: "Is bonus or overtime income taxed differently?",
      a: "No — bonuses and overtime are added to your annual taxable income and taxed at the same progressive rates. They can, however, push you into a higher marginal bracket for that portion of income.",
    },
  ],
  relatedTools: [
    {
      label: "Bond Repayment Calculator",
      path: "/bond-repayment",
      description: "See what home loan repayment fits your take-home pay.",
    },
    {
      label: "Car Repayment Calculator",
      path: "/car-repayment",
      description: "Estimate vehicle finance repayments against your budget.",
    },
    {
      label: "Compound Interest Calculator",
      path: "/compound-interest",
      description: "See how much you could realistically invest each month.",
    },
  ],
  relatedGuides: [
    {
      label: "Budgeting Basics",
      path: "/guides/budgeting",
      description: "Build a budget around your real take-home pay.",
    },
    {
      label: "Tax Basics in South Africa",
      path: "/guides/tax-basics",
      description: "The bigger tax picture PAYE fits into.",
    },
    {
      label: "Retirement Planning",
      path: "/guides/retirement-planning",
      description: "How RA contributions reduce your tax bill further.",
    },
    {
      label: "Home Loans Guide",
      path: "/guides/home-loans",
      description: "How lenders use your take-home pay to assess affordability.",
    },
    {
      label: "How to Save Money",
      path: "/guides/saving-money",
      description: "Set a savings target based on your real take-home pay.",
    },
  ],
};
