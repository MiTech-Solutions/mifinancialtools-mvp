export const bondRepaymentContent = {
  intro: [
    "A home loan — a bond — is the largest debt most South Africans will ever take on, and the monthly repayment it produces will likely be the single biggest line item in your household budget for the next 20 years. The Bond Repayment Calculator lets you enter the property price, your deposit, an interest rate, and a repayment term, and immediately see what your estimated monthly instalment will be, along with the total amount you'll repay over the full term.",
    "This tool is built for anyone house-hunting and trying to work out what price bracket they can actually afford, first-time buyers comparing a bank's pre-approval offer against their own budget, or existing homeowners considering what an extra lump-sum payment or a shorter term would do to their repayment.",
    "It gives you a realistic planning number before you sit down with a bank or bond originator — not a final quote, but a solid baseline to negotiate from.",
  ],
  howItWorks: {
    paragraphs: [
      "The calculator subtracts your deposit from the property price to get the loan amount, then applies standard amortisation — the method every South African bank uses — to spread that amount plus interest evenly across your chosen term, usually expressed in years and converted to months.",
      "Like any amortising loan, each instalment is split between interest and principal. In the early years of a 20-year bond, the majority of each payment goes toward interest rather than reducing what you owe. This is exactly why paying extra into your bond in the first few years — even small additional amounts — saves disproportionately more in total interest than the same extra payment made later in the term.",
    ],
    inputs: [
      { label: "Property price", desc: "The purchase price of the property you're financing." },
      { label: "Deposit", desc: "The upfront amount you're putting down, reducing the loan amount." },
      { label: "Interest rate", desc: "The annual rate quoted by the bank, typically expressed relative to prime." },
      { label: "Term", desc: "The repayment period in years — 20 years is standard in South Africa, though 25 or 30 is sometimes offered." },
    ],
    outputs: [
      { label: "Loan amount", desc: "Property price minus deposit — the amount actually being financed." },
      { label: "Monthly repayment", desc: "The fixed instalment you'd pay each month across the full term." },
      { label: "Total repayment", desc: "Every instalment added up over the full term." },
      { label: "Total interest", desc: "Total repayment minus the loan amount — the true cost of the debt." },
    ],
  },
  formula: {
    paragraphs: [
      "Bond repayments use the same fixed-payment amortisation formula as car and personal loans — only the typical rate and term differ. South African home loans are usually variable rate, meaning your instalment can change if the prime lending rate moves, so treat the result as accurate for today's rate, not guaranteed for the full 20 years.",
    ],
    expression: "M = P × r / (1 − (1 + r)^−n)",
    variables: [
      { symbol: "M", meaning: "monthly repayment" },
      { symbol: "P", meaning: "principal (property price minus deposit)" },
      { symbol: "r", meaning: "monthly interest rate (annual rate ÷ 12 ÷ 100)" },
      { symbol: "n", meaning: "number of monthly payments (term in years × 12)" },
    ],
  },
  examples: [
    {
      title: "Example 1: First-time buyer, 10% deposit",
      scenario:
        "A buyer purchases an R850,000 home with an R85,000 deposit (10%), at 11.75% over 20 years — currently around prime plus 0.5%.",
      steps: [
        "Loan amount = R850,000 − R85,000 = R765,000",
        "Monthly rate = 11.75% ÷ 12 = 0.9792%",
        "Applying the formula over 240 months gives a monthly repayment of roughly R8,240",
      ],
      result:
        "Total repayment ≈ R1,977,600 over 20 years, meaning roughly R1,212,600 in interest on top of the R765,000 borrowed — more than the loan amount itself.",
    },
    {
      title: "Example 2: Smaller property, no deposit",
      scenario:
        "A buyer qualifies for 100% finance (no deposit) on a R550,000 apartment at 11.25% over 20 years.",
      steps: [
        "Loan amount = R550,000 (full amount financed)",
        "Monthly rate = 11.25% ÷ 12 = 0.9375%",
        "Over 240 months, the monthly repayment works out to roughly R5,720",
      ],
      result:
        "Total repayment ≈ R1,372,800, so about R822,800 in interest — a clear illustration of how skipping a deposit increases both the loan amount and the total interest paid.",
    },
    {
      title: "Example 3: Same loan, 15-year term instead of 20",
      scenario:
        "Same R765,000 loan as Example 1, same 11.75% rate, but repaid over 15 years instead of 20.",
      steps: [
        "Loan amount stays at R765,000",
        "Monthly rate stays at 0.9792%",
        "Over 180 months, monthly repayment rises to roughly R9,150",
      ],
      result:
        "Monthly repayment increases by about R910, but total interest drops from roughly R1,212,600 to about R881,000 — a saving of over R330,000 for choosing a shorter term.",
    },
  ],
  benefits: [
    "Work out what property price you can realistically afford before you start viewing homes.",
    "See exactly how much a bigger deposit or shorter term saves in total interest, not just monthly repayment.",
    "Compare a bank's pre-approval figure against an independent estimate before signing anything.",
    "Understand the long-term cost of a 20-year commitment, not just the number that fits this month's budget.",
  ],
  mistakes: [
    {
      title: "Budgeting only for the bond repayment",
      body: "Bond quotes typically exclude transfer duty, bond registration and initiation fees, homeowner's insurance, levies (for sectional title), and rates and taxes. These can add several thousand rand a month on top of the repayment shown here.",
    },
    {
      title: "Assuming the rate is fixed for the full term",
      body: "South African home loans are usually variable, tied to the prime lending rate. Your repayment shown today can rise or fall if the South African Reserve Bank changes the repo rate — budget with some buffer for rate increases.",
    },
    {
      title: "Choosing the longest term by default",
      body: "A 20 or 25-year term lowers your monthly instalment, but as Example 3 shows, a shorter term can save you an enormous amount in total interest if the higher monthly repayment fits your budget.",
    },
    {
      title: "Not shopping the rate across multiple banks",
      body: "A difference of even 0.5% on a 20-year bond can mean tens of thousands of rand in extra interest. A bond originator can get quotes from multiple banks at no cost to you.",
    },
  ],
  faqs: [
    {
      q: "What interest rate should I use if I haven't been pre-approved yet?",
      a: "As a planning benchmark, use the current prime lending rate plus 0% to 1%, since most South African bond offers are priced relative to prime based on your credit profile and deposit size.",
    },
    {
      q: "Does this calculator include transfer duty and bond registration costs?",
      a: "No. This calculator estimates the monthly loan repayment only. Transfer duty, bond registration, and initiation fees are separate, once-off costs you'll need to budget for on top of your deposit.",
    },
    {
      q: "How much deposit do I need for a home loan?",
      a: "Some buyers qualify for 100% finance with no deposit, but a deposit of 10–20% typically improves your interest rate and reduces your monthly repayment and total interest significantly, as shown in the worked examples.",
    },
    {
      q: "Is a 20-year term the only option?",
      a: "20 years is the most common term in South Africa, but 25 and sometimes 30-year terms are available and further lower the monthly instalment, at the cost of significantly more total interest.",
    },
    {
      q: "Why did my bank's quote come out higher than this calculator?",
      a: "Bank quotes often bundle in credit life insurance, homeowner's cover, and admin fees, none of which this calculator includes. Ask for an itemised quote to compare the repayment figures directly.",
    },
    {
      q: "Does paying extra into my bond actually save money?",
      a: "Yes — because of how amortisation works, extra payments made earlier in the term reduce the principal faster and disproportionately cut the total interest you'd otherwise pay over the remaining years.",
    },
  ],
  relatedTools: [
    {
      label: "Car Repayment Calculator",
      path: "/car-repayment",
      description: "Estimate monthly vehicle finance repayments.",
    },
    {
      label: "Compound Interest Calculator",
      path: "/compound-interest",
      description: "See how a bigger deposit could grow before you buy.",
    },
    {
      label: "Income Tax Calculator",
      path: "/income-tax",
      description: "Check your take-home pay to budget your bond repayment.",
    },
  ],
  relatedGuides: [
    {
      label: "Home Loans Guide",
      path: "/guides/home-loans",
      description: "Bond approval, real costs, and affordability explained.",
    },
    {
      label: "Debt Management",
      path: "/guides/debt-management",
      description: "Practical strategies to pay down debt faster.",
    },
    {
      label: "Credit Scores Explained",
      path: "/guides/credit-scores",
      description: "How your credit profile affects the rate you're offered.",
    },
  ],
};
