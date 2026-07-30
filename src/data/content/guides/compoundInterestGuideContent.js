export const compoundInterestGuideContent = {
  title: "Compound Interest Explained: Why It's Called the Eighth Wonder of Finance",
  metaDescription:
    "A clear, complete explanation of compound interest — how it differs from simple interest, the Rule of 72, why compounding frequency matters, and why it works against you in debt just as it works for you in savings.",
  path: "/guides/compound-interest-explained",
  eyebrow: "Money fundamentals",
  readTime: "8 min",
  intro: [
    "Compound interest is frequently called the most powerful force in personal finance — sometimes attributed to Einstein as the 'eighth wonder of the world,' though the quote's origin is disputed. What's not disputed is the mechanics: compound interest means you earn (or pay) interest not just on your original amount, but on all the interest that's already accumulated.",
    "This guide explains the concept from first principles — what makes it different from simple interest, a quick mental shortcut for estimating growth, why compounding frequency matters more than people assume, and why the same force that builds wealth in a savings account can just as easily trap you in debt.",
  ],
  sections: [
    {
      heading: "Simple interest vs. compound interest",
      paragraphs: [
        "Simple interest is calculated only on your original amount, every period, for the life of the investment or loan. Compound interest is recalculated on your growing balance — original amount plus all interest earned so far — which means the amount of interest you earn each period keeps increasing.",
        "Consider R10,000 invested at 10% per year for 20 years. Under simple interest, you'd earn a fixed R1,000 every year, ending with R30,000 total. Under compound interest (compounded annually), the same investment grows to roughly R67,275 — more than double the simple-interest result, purely because each year's interest also earns interest in every subsequent year.",
      ],
    },
    {
      heading: "The Rule of 72: a mental shortcut",
      paragraphs: [
        "You don't need a calculator to estimate how long it takes an investment to double under compound interest. The Rule of 72 says: divide 72 by your annual interest rate, and the result is roughly the number of years to double your money.",
        "At 10% per year, money doubles in about 7.2 years (72 ÷ 10). At 12%, about 6 years. At a more conservative 6%, about 12 years. It's an approximation, not exact, but it's accurate enough to quickly compare the long-term impact of different return assumptions without running a full calculation.",
      ],
    },
    {
      heading: "Why compounding frequency matters",
      paragraphs: [
        "The same annual rate produces different results depending on how often it compounds — annually, monthly, or daily — because each compounding event recalculates interest on a slightly larger balance than the last. More frequent compounding produces a slightly higher effective return, even at the same quoted annual rate.",
        "This is why the 'effective annual rate' (or EAR) on a savings account can be slightly higher than its quoted nominal rate if interest compounds monthly rather than annually. The difference is usually small for typical savings rates, but it becomes meaningful on larger balances held over long periods.",
      ],
    },
    {
      heading: "Compounding works against you in debt",
      paragraphs: [
        "The exact same mechanism that grows an investment compounds against you when you carry debt — especially high-interest, revolving debt like credit cards and store cards, which in South Africa often carry rates of 20–24% per year or higher.",
        "If you carried R20,000 in credit card debt at 24% per year (roughly 2% per month) and made no payments for three years, the balance would compound to roughly R40,800 — more than double the original amount, purely from unpaid interest accumulating on unpaid interest.",
        "This is precisely why paying more than the minimum on high-interest debt has an outsized effect: every extra rand you pay down stops compounding against you immediately, rather than continuing to grow the balance you still owe.",
      ],
    },
    {
      heading: "Time matters more than most people expect",
      paragraphs: [
        "Because compounding accelerates over time, the biggest lever in any long-term investment isn't usually the contribution amount — it's how many years the money stays invested. Two investors contributing the same amount, but starting ten years apart, can end up with dramatically different balances, with the earlier starter often finishing with several times more, despite contributing for the same number of years relative to their own start date.",
        "This is the core reason financial advice consistently emphasises starting early over waiting for a 'better' or larger lump sum — the extra years of compounding are usually worth more than a bigger starting amount contributed later.",
      ],
    },
  ],
  keyTakeaways: [
    "Compound interest earns interest on interest already accumulated — simple interest doesn't.",
    "The Rule of 72 estimates doubling time: 72 ÷ annual rate ≈ years to double your money.",
    "More frequent compounding (monthly vs annually) produces a slightly higher effective return at the same nominal rate.",
    "Compounding works against you in high-interest debt exactly as it works for you in savings — unpaid credit card interest can double a balance in a few years.",
    "Time invested matters more than the size of any single contribution — starting early is usually more valuable than starting with more money later.",
  ],
  faqs: [
    {
      q: "Is compound interest always better than simple interest for savers?",
      a: "Yes, for savings and investments — compounding always produces equal or greater growth than simple interest at the same rate. The comparison flips for debt, where compounding works against the borrower.",
    },
    {
      q: "Does the Rule of 72 work for any interest rate?",
      a: "It's most accurate for rates between roughly 6% and 12%. Outside that range, the approximation becomes slightly less precise, though it's still a useful quick estimate.",
    },
    {
      q: "How often does South African bank interest typically compound?",
      a: "It varies by product — many savings accounts compound monthly, while some fixed deposits compound annually or at maturity. Always check the specific product's terms, since this affects your real (effective) return.",
    },
    {
      q: "How can I see my own numbers instead of general examples?",
      a: "Use our Compound Interest Calculator to enter your own starting amount, monthly contribution, expected return, and time horizon for a precise projection.",
    },
  ],
  relatedCalculators: [
    {
      label: "Compound Interest Calculator",
      path: "/compound-interest",
      description: "Run your own numbers with real contribution amounts.",
    },
  ],
  relatedGuides: [
    {
      label: "How to Save Money",
      path: "/guides/saving-money",
      description: "Concrete tactics for saving consistently in South Africa.",
    },
    {
      label: "Budgeting Basics",
      path: "/guides/budgeting",
      description: "A practical framework for building a budget that sticks.",
    },
    {
      label: "Investing Basics",
      path: "/guides/investing-basics",
      description: "Asset classes, risk, and diversification explained.",
    },
  ],
};
