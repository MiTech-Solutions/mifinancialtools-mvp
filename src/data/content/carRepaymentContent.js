export const carRepaymentContent = {
  intro: [
    "Buying a car on finance is one of the biggest monthly commitments most South Africans take on outside of a home loan, and it's easy to underestimate what a vehicle will actually cost you once interest and term length are factored in. The Car Repayment Calculator lets you enter the vehicle price, your deposit, an interest rate, and a loan term, and instantly see what your monthly instalment will look like, along with the total amount you'll repay over the life of the loan.",
    "This tool is built for anyone shopping for a new or used car, comparing dealer finance against a bank pre-approval, or simply trying to work out whether a specific price bracket fits their monthly budget before they start negotiating. It's also useful if you already have finance and want to see what changing your deposit or term would do to your instalment.",
    "It won't replace a formal quote from a bank or dealer, but it gives you a realistic, honest number to plan around before anyone tries to sell you anything.",
  ],
  howItWorks: {
    paragraphs: [
      "The calculator takes your inputs and works out the amount you actually need to finance (the vehicle price minus your deposit), then applies standard loan amortisation — the same method banks use — to spread that amount, plus interest, evenly across your chosen term.",
      "Every instalment you pay is split between interest and principal. Early in the loan, a larger share goes toward interest; by the final few months, most of the payment is reducing the principal balance. The calculator's total interest figure shows you exactly how much of what you pay over the full term is the cost of borrowing, rather than the cost of the car itself.",
    ],
    inputs: [
      { label: "Vehicle price", desc: "The full purchase price of the car before any deposit is applied." },
      { label: "Deposit", desc: "The upfront amount you're putting down, reducing the amount financed." },
      { label: "Interest rate", desc: "The annual interest rate quoted by the bank or dealer, usually linked to prime." },
      { label: "Term", desc: "The repayment period in months — commonly 60 or 72 months in South Africa." },
      { label: "Balloon / residual (optional)", desc: "A percentage of the vehicle price deferred to a lump sum at the end of the term, if your deal includes one." },
    ],
    outputs: [
      { label: "Loan amount", desc: "Vehicle price minus deposit — the amount actually being financed." },
      { label: "Monthly repayment", desc: "The fixed instalment you'd pay each month for the full term." },
      { label: "Balloon payment due", desc: "The lump sum still owed at the end of the term, shown separately if you've set a balloon percentage." },
      { label: "Total repayment", desc: "Every instalment plus the balloon payment, added up across the full term." },
      { label: "Total interest", desc: "The total repayment minus the loan amount — the true cost of borrowing." },
    ],
  },
  formula: {
    paragraphs: [
      "Car finance in South Africa uses a standard fixed-rate amortisation formula. The same formula is used for personal loans and most bond calculations — only the typical rates and terms differ.",
      "When a balloon payment is included, the formula changes slightly: the balloon amount is discounted back to today's value and subtracted from the principal before working out the monthly instalment, since that portion isn't being paid off month by month.",
    ],
    expression: "M = P × r / (1 − (1 + r)^−n)   |   with balloon: M = (P − B(1+r)^−n) × r / (1 − (1 + r)^−n)",
    variables: [
      { symbol: "M", meaning: "monthly repayment" },
      { symbol: "P", meaning: "principal (vehicle price minus deposit)" },
      { symbol: "B", meaning: "balloon amount (vehicle price × balloon %), only applies if set" },
      { symbol: "r", meaning: "monthly interest rate (annual rate ÷ 12 ÷ 100)" },
      { symbol: "n", meaning: "number of monthly payments (loan term in months)" },
    ],
  },
  examples: [
    {
      title: "Example 1: New car, moderate deposit",
      scenario:
        "A buyer wants a R320,000 new hatchback, puts down a R40,000 deposit, and is quoted 12.5% over 72 months.",
      steps: [
        "Loan amount = R320,000 − R40,000 = R280,000",
        "Monthly rate = 12.5% ÷ 12 = 1.0417%",
        "Applying the formula over 72 months gives a monthly repayment of roughly R5,460",
      ],
      result:
        "Total repayment ≈ R393,120 over 6 years, meaning roughly R113,120 in interest on top of the R280,000 borrowed.",
    },
    {
      title: "Example 2: Used car, smaller deposit, shorter term",
      scenario:
        "A buyer finances a R150,000 used sedan with a R10,000 deposit at 14% over 60 months, a typical rate for used-vehicle finance.",
      steps: [
        "Loan amount = R150,000 − R10,000 = R140,000",
        "Monthly rate = 14% ÷ 12 = 1.1667%",
        "Over 60 months, the monthly repayment works out to roughly R3,257",
      ],
      result:
        "Total repayment ≈ R195,420, so about R55,420 in interest — a smaller total than Example 1, but a higher monthly instalment relative to the loan size because of the shorter term and higher rate.",
    },
    {
      title: "Example 3: Larger deposit to lower the monthly repayment",
      scenario:
        "Same R320,000 vehicle as Example 1, but the buyer saves up a R80,000 deposit instead of R40,000, keeping the same rate and term.",
      steps: [
        "Loan amount = R320,000 − R80,000 = R240,000",
        "Monthly rate stays at 1.0417%",
        "Over 72 months, monthly repayment drops to roughly R4,680",
      ],
      result:
        "Monthly repayment falls by about R780 compared to Example 1, purely from doubling the deposit — a clear illustration of why saving before you buy matters.",
    },
    {
      title: "Example 4: Same deal, with a 30% balloon payment",
      scenario:
        "The R250,000 vehicle with a R30,000 deposit at 12.5% over 72 months from our calculator's own defaults, now with a 30% balloon (R75,000) added.",
      steps: [
        "Loan amount = R250,000 − R30,000 = R220,000, same as with no balloon",
        "With no balloon, monthly repayment would be roughly R4,358",
        "With a 30% balloon (R75,000, based on vehicle price), monthly repayment drops to roughly R3,654",
      ],
      result:
        "Monthly repayment falls by about R705, but total interest rises from roughly R93,809 to R118,079 — and R75,000 is still owed as a lump sum when the term ends. See our Balloon Payments Explained guide for what your options are when that happens.",
    },
  ],
  benefits: [
    "See a realistic monthly figure before you're sitting in a dealership finance office under pressure to sign.",
    "Compare how a bigger deposit, shorter term, or lower rate changes your instalment, so you know what's worth negotiating for.",
    "Understand the true cost of the loan — total interest paid — not just the monthly number.",
    "Plan your budget around a specific price bracket before you start shopping, rather than after.",
  ],
  mistakes: [
    {
      title: "Only looking at the monthly instalment",
      body: "A lower monthly repayment from a longer term can mean paying significantly more in total interest. Always check the total repayment figure, not just the monthly one.",
    },
    {
      title: "Forgetting extras the quote doesn't include",
      body: "Bank and dealer quotes often exclude initiation fees, monthly service fees, and compulsory insurance. Build a small buffer into your budget for these on top of the calculator's estimate.",
    },
    {
      title: "Using an optimistic interest rate",
      body: "Your actual rate depends on your credit profile. Run the numbers at a slightly higher rate than advertised so you're not caught off guard if you don't qualify for the best rate.",
    },
    {
      title: "Assuming a balloon payment is free money",
      body: "A balloon lowers your monthly instalment, but you still pay interest on it for the full term and owe it as a lump sum at the end — settled in cash, refinanced, or covered by the car's resale value. Set a balloon percentage above if your quote includes one; the total interest figure will update to reflect it.",
    },
  ],
  faqs: [
    {
      q: "What interest rate should I use if I don't have a quote yet?",
      a: "As a planning benchmark, use 12–14% for new vehicles and slightly higher for used vehicles, since South African car finance is typically priced relative to the prime lending rate plus a margin based on your credit profile.",
    },
    {
      q: "Does this calculator include VAT?",
      a: "The vehicle price you enter should be the full purchase price, which already includes VAT if you're buying from a registered dealer. The calculator doesn't add VAT separately.",
    },
    {
      q: "Why is my dealer's quoted instalment different from this calculator's result?",
      a: "Dealer quotes often include extras like service plans and insurance premiums, none of which this calculator accounts for. If your quote includes a balloon payment, make sure you've entered the same balloon percentage here — that alone can account for a large part of the difference.",
    },
    {
      q: "Is a 72-month term a good idea?",
      a: "Longer terms lower your monthly instalment but increase total interest paid and how long you're in debt for a depreciating asset. It can make sense if it keeps you within budget, but it's worth comparing against a 60-month term first.",
    },
    {
      q: "How much deposit should I put down?",
      a: "There's no fixed rule, but a deposit of 10–20% of the vehicle price is common in South Africa and can meaningfully reduce your monthly repayment and total interest, as shown in the worked examples above.",
    },
    {
      q: "Can I use this calculator for a used car?",
      a: "Yes — enter the used vehicle's purchase price and a rate reflecting used-vehicle finance, which is typically 1–2% higher than new-vehicle rates.",
    },
    {
      q: "How does the balloon payment input work?",
      a: "Enter it as a percentage of the vehicle price, which is how South African dealers and banks typically quote it — commonly 20–35%. The calculator lowers your monthly repayment accordingly and shows the lump sum still owed at the end of the term.",
    },
  ],
  relatedTools: [
    {
      label: "Bond Repayment Calculator",
      path: "/bond-repayment",
      description: "Work out your estimated home loan instalment.",
    },
    {
      label: "Compound Interest Calculator",
      path: "/compound-interest",
      description: "See how your deposit savings could grow before you buy.",
    },
    {
      label: "Income Tax Calculator",
      path: "/income-tax",
      description: "Check your take-home pay to budget your instalment.",
    },
  ],
  relatedGuides: [
    {
      label: "Car Finance Guide",
      path: "/guides/car-finance",
      description: "What rate to expect and how car finance actually works.",
    },
    {
      label: "Budgeting Basics",
      path: "/guides/budgeting",
      description: "Work out what monthly instalment actually fits your budget.",
    },
    {
      label: "Credit Scores Explained",
      path: "/guides/credit-scores",
      description: "How your credit profile affects the rate you're offered.",
    },
    {
      label: "Debt Management",
      path: "/guides/debt-management",
      description: "Where car finance fits into your overall debt picture.",
    },
    {
      label: "Balloon Payments Explained",
      path: "/guides/balloon-payments",
      description: "How a residual payment changes your monthly instalment.",
    },
  ],
};
