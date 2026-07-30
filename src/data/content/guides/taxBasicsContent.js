export const taxBasicsContent = {
  title: "Tax Basics in South Africa: A Plain-English Overview",
  metaDescription:
    "An overview of how personal tax works in South Africa — PAYE, VAT, capital gains and dividends tax, the tax year, provisional tax, and how eFiling and assessments actually work.",
  path: "/guides/tax-basics",
  eyebrow: "Tax",
  readTime: "8 min",
  intro: [
    "Most South Africans interact with several different taxes without necessarily separating them out — PAYE deducted from a payslip, VAT added at checkout, tax on investment returns. This guide gives a plain-English overview of the main taxes individuals encounter, how the tax year and assessment process work, and where the common deductions actually apply.",
  ],
  sections: [
    {
      heading: "The tax year and who administers it",
      paragraphs: [
        "South Africa's Revenue Service (SARS) administers all national taxes. The tax year for individuals runs from 1 March to the end of February the following year — so the '2025/26 tax year' covers 1 March 2025 to 28 February 2026. Tax brackets, rebates, and thresholds are typically reviewed and adjusted in the annual Budget Speech, usually delivered in February.",
      ],
    },
    {
      heading: "PAYE: tax on employment income",
      paragraphs: [
        "Pay-As-You-Earn (PAYE) is the mechanism by which your employer deducts estimated income tax from your salary each month and pays it to SARS on your behalf, so that your annual tax liability is settled progressively rather than as one large amount at year-end. It's calculated using South Africa's progressive tax brackets — each portion of your income is taxed at its own rate, not your whole salary at your top rate.",
        "You can see exactly how this works with real numbers, including the current brackets, rebates, and medical tax credits, using our Income Tax Calculator.",
      ],
    },
    {
      heading: "VAT: tax on consumption",
      paragraphs: [
        "Value-Added Tax (VAT) is charged on most goods and services at a standard rate of 15%, added at the point of sale. Some essential items — such as basic foodstuffs like brown bread and maize meal — are zero-rated, meaning no VAT is charged on them at all, to help keep essentials more affordable.",
        "Businesses must register for VAT once their taxable turnover exceeds a set compulsory threshold (which has been raised over time — check SARS directly for the current figure), with voluntary registration available at a much lower turnover level. As an individual consumer, VAT isn't something you file separately — it's simply built into the price you pay.",
      ],
    },
    {
      heading: "Tax on investments: dividends, interest, and capital gains",
      paragraphs: [
        "Investment income is taxed differently depending on its type. Dividends from South African companies are generally subject to a separate dividends withholding tax, deducted before you receive the dividend. Interest income is added to your taxable income, though a portion is exempt each year up to a set annual interest exemption threshold. Capital gains (profit from selling an asset like shares or property) are only partially included in your taxable income — a portion is included and taxed at your normal rates, rather than the full gain.",
        "All of this is why holding investments inside a Tax-Free Savings Account, discussed in our Saving Money guide, is so valuable for long-term growth — it removes all three of these tax types entirely, within the account's contribution limits.",
      ],
    },
    {
      heading: "Deductions that actually reduce your tax bill",
      paragraphs: [
        "A handful of deductions meaningfully lower taxable income for typical salaried individuals: retirement fund contributions (up to 27.5% of taxable income, capped at R350,000 a year, as covered in our Retirement Planning guide), medical scheme fee tax credits (a fixed monthly credit per medical aid member, regardless of your actual premium), and donations to registered Public Benefit Organisations with an 18A tax certificate, deductible up to a percentage of taxable income.",
      ],
    },
    {
      heading: "Provisional tax: for the self-employed and additional income",
      paragraphs: [
        "If you earn income that isn't taxed through PAYE — freelance or business income, rental income, or significant investment income — you're generally required to register as a provisional taxpayer and pay estimated tax in two (sometimes three) instalments during the tax year, rather than having it deducted automatically like a salaried employee. This prevents a large, unexpected tax bill at year-end and keeps you compliant with SARS's payment schedule.",
      ],
    },
    {
      heading: "eFiling and the assessment process",
      paragraphs: [
        "Most individual taxpayers file an annual tax return through SARS eFiling (or the SARS MobiApp), which SARS uses to reconcile what was deducted through PAYE against your actual tax liability, taking deductions and other income into account. If more tax was deducted than you owed, SARS issues a refund; if too little was deducted, you'll owe the difference. Many salaried taxpayers with straightforward income are auto-assessed by SARS, meaning a return is prepared for you automatically based on data SARS already holds — it's still worth reviewing it before accepting, since auto-assessments don't always capture every deduction you're entitled to.",
      ],
    },
  ],
  keyTakeaways: [
    "The South African tax year runs 1 March to the end of February; PAYE is deducted monthly and reconciled against your actual liability at assessment.",
    "VAT is charged at 15% on most goods and services, with certain essential items zero-rated.",
    "Dividends, interest, and capital gains are each taxed differently — a Tax-Free Savings Account shelters all three within its contribution limits.",
    "Retirement contributions, medical tax credits, and registered donations are the main levers most salaried individuals have to reduce taxable income.",
    "If you earn income outside PAYE, you likely need to register as a provisional taxpayer and pay estimated tax during the year rather than only at assessment.",
  ],
  faqs: [
    {
      q: "Do I need to submit a tax return if I only earn a salary?",
      a: "Many salaried individuals below certain income thresholds and with no other income are not required to file, though SARS increasingly auto-assesses based on data it already has. It's worth checking your specific situation on SARS eFiling, since filing can also surface deductions or a refund you'd otherwise miss.",
    },
    {
      q: "What's the difference between a tax deduction and a tax credit?",
      a: "A deduction (like a retirement contribution) reduces your taxable income before tax is calculated. A credit (like the medical scheme fee tax credit) reduces the tax you owe directly, after it's been calculated — the two work differently, though both lower your final tax bill.",
    },
    {
      q: "Is VAT included in the prices I see in shops?",
      a: "Yes — retail prices displayed to consumers are required to include VAT, so the price on the shelf is generally what you pay at the till.",
    },
    {
      q: "What happens if I don't pay provisional tax on time?",
      a: "Late or underpaid provisional tax can result in interest and penalties from SARS, so it's important to estimate your payments reasonably accurately and pay by the relevant deadlines during the tax year.",
    },
  ],
  relatedCalculators: [
    {
      label: "Income Tax Calculator",
      path: "/income-tax",
      description: "See your exact PAYE, UIF, and take-home pay.",
    },
  ],
  relatedGuides: [
    {
      label: "Retirement Planning",
      path: "/guides/retirement-planning",
      description: "How retirement contributions reduce your tax bill.",
    },
    {
      label: "How to Save Money",
      path: "/guides/saving-money",
      description: "How a Tax-Free Savings Account shelters investment tax.",
    },
  ],
};
