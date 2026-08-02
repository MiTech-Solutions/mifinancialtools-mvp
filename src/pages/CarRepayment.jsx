import { useMemo, useState } from "react";
import CalculatorLayout from "../components/calculators/CalculatorLayout";
import CalculatorArticle from "../components/calculators/CalculatorArticle";
import { carRepaymentContent } from "../data/content/carRepaymentContent";
import { formatCurrency } from "../utils/formatCurrency";
import AnimatedCurrency from "../components/common/AnimatedCurrency";
import { Helmet } from "react-helmet-async";



export default function CarRepayment() {
  const [vehiclePrice, setVehiclePrice] = useState("250000");
  const [deposit, setDeposit] = useState("30000");
  const [interestRate, setInterestRate] = useState("12.5");
  const [termMonths, setTermMonths] = useState("72");
  const [balloonPercent, setBalloonPercent] = useState("0");

  const results = useMemo(() => {
    const price = Number(vehiclePrice) || 0;
    const upfrontDeposit = Number(deposit) || 0;
    const annualRate = Number(interestRate) || 0;
    const months = Number(termMonths) || 0;
    const balloonPct = Math.max(Number(balloonPercent) || 0, 0);

    const principal = Math.max(price - upfrontDeposit, 0);
    const monthlyRate = annualRate / 100 / 12;

    // Balloon (residual) is quoted as a % of the vehicle price, standard
    // practice for South African car finance — capped so it can never
    // exceed the amount actually financed.
    const balloonAmount = Math.min(price * (balloonPct / 100), principal);

    if (principal <= 0 || months <= 0) {
      return {
        principal: 0,
        monthlyRepayment: 0,
        totalRepayment: 0,
        totalInterest: 0,
        balloonAmount: 0,
      };
    }

    let monthlyRepayment = 0;

    if (monthlyRate === 0) {
      monthlyRepayment = (principal - balloonAmount) / months;
    } else {
      const discountedBalloon = balloonAmount * Math.pow(1 + monthlyRate, -months);
      monthlyRepayment =
        ((principal - discountedBalloon) * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -months));
    }

    const totalRepayment = monthlyRepayment * months + balloonAmount;
    const totalInterest = totalRepayment - principal;

    return {
      principal,
      monthlyRepayment,
      totalRepayment,
      totalInterest,
      balloonAmount,
    };
  }, [vehiclePrice, deposit, interestRate, termMonths, balloonPercent]);

  const resultPanel = (
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#E8C685]">
        Estimated results
      </p>

      <h2 className="font-display mt-4 text-2xl font-semibold text-white">
        Car finance breakdown
      </h2>

      <p className="mt-3 text-sm leading-7 text-slate-400">
        This estimate excludes extras like initiation fees, monthly admin fees,
        and insurance. Set a balloon percentage below if your quote includes one.
      </p>

      <div className="mt-8 space-y-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-slate-400">Loan amount</p>
          <p className="font-numeral mt-2 text-2xl font-semibold text-white">
            <AnimatedCurrency value={results.principal} />
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-slate-400">Estimated monthly repayment</p>
          <p className="font-numeral mt-2 text-2xl font-semibold text-white">
            <AnimatedCurrency value={results.monthlyRepayment} />
          </p>
        </div>

        {results.balloonAmount > 0 && (
          <div className="rounded-2xl border border-[#D6A343]/30 bg-[#D6A343]/5 p-4">
            <p className="text-sm text-[#E8C685]">
              Balloon payment due at end of term
            </p>
            <p className="font-numeral mt-2 text-2xl font-semibold text-white">
              <AnimatedCurrency value={results.balloonAmount} />
            </p>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              You'll need to pay this lump sum, refinance it, or trade in the
              vehicle when the term ends — it isn't included in the monthly
              repayment above.
            </p>
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-slate-400">Total repayment</p>
            <p className="font-numeral mt-2 text-xl font-semibold text-white">
              <AnimatedCurrency value={results.totalRepayment} />
            </p>
            {results.balloonAmount > 0 && (
              <p className="mt-1 text-xs text-slate-500">
                Includes the balloon payment above
              </p>
            )}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-slate-400">Total interest</p>
            <p className="font-numeral mt-2 text-xl font-semibold text-white">
              <AnimatedCurrency value={results.totalInterest} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
    <Helmet>
      <title>Car Repayment Calculator South Africa | MiTools</title>
      <meta
        name="description"
        content="Calculate your monthly car repayments in South Africa, including an optional balloon (residual) payment. Enter your vehicle price, deposit, interest rate, and loan term to get an instant estimate. Free car finance tool."
      />
      <link rel="canonical" href="https://mitools.app/car-repayment" />
      <meta property="og:title" content="Car Repayment Calculator South Africa | MiTools" />
      <meta
        property="og:description"
        content="Free South African car finance calculator. Estimate your monthly vehicle repayments with deposit, interest rate, and loan term options."
      />
      <meta property="og:url" content="https://mitools.app/car-repayment" />
      <meta property="og:image" content="https://mitools.app/og-image.png" />
    </Helmet>
    <CalculatorLayout
      eyebrow="Vehicle finance tool"
      title="Car Repayment Calculator"
      description="Estimate monthly car repayments using purchase price, deposit, interest rate, and loan term."
      result={resultPanel}
    >

      <div className="grid gap-5">
        <div>
          <label htmlFor="car-vehicle-price" className="mb-2 block text-sm font-medium text-slate-200">
            Vehicle price
          </label>
          <input
            id="car-vehicle-price"
            type="text"
            value={Number(vehiclePrice || 0).toLocaleString("en-US")}
            onChange={(e) => {
            const raw = e.target.value.replace(/,/g, ""); // remove commas
        if (!isNaN(raw)) {
          setVehiclePrice(raw);
        }
      }}
        placeholder="e.g. 250000"
        className="w-full rounded-2xl border border-white/10 bg-[#171F1B] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#D6A343]/40"
        />
        </div>

<div>
  <label htmlFor="car-deposit" className="mb-2 block text-sm font-medium text-slate-200">
    Deposit
  </label>
  <input
    id="car-deposit"
    type="text"
    value={Number(deposit || 0).toLocaleString("en-US")}
    onChange={(e) => {
      const raw = e.target.value.replace(/,/g, ""); // remove commas
      if (!isNaN(raw)) {
        setDeposit(raw);
      }
    }}
    placeholder="e.g. 30000"
    className="w-full rounded-2xl border border-white/10 bg-[#171F1B] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#D6A343]/40"
  />
</div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="car-interest-rate" className="mb-2 block text-sm font-medium text-slate-200">
              Interest rate (%)
            </label>
            <input
              id="car-interest-rate"
              type="number"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="e.g. 12.5"
              className="w-full rounded-2xl border border-white/10 bg-[#171F1B] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#D6A343]/40"
            />
          </div>

          <div>
            <label htmlFor="car-term" className="mb-2 block text-sm font-medium text-slate-200">
              Term (months)
            </label>
            <input
              id="car-term"
              type="number"
              value={termMonths}
              onChange={(e) => setTermMonths(e.target.value)}
              placeholder="e.g. 72"
              className="w-full rounded-2xl border border-white/10 bg-[#171F1B] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#D6A343]/40"
            />
          </div>
        </div>

        <div>
          <label htmlFor="car-balloon" className="mb-2 block text-sm font-medium text-slate-200">
            Balloon / residual payment{" "}
            <span className="font-normal text-slate-400">(% of vehicle price, optional)</span>
          </label>
          <input
            id="car-balloon"
            type="number"
            step="1"
            min="0"
            max="100"
            value={balloonPercent}
            onChange={(e) => setBalloonPercent(e.target.value)}
            placeholder="e.g. 30"
            className="w-full rounded-2xl border border-white/10 bg-[#171F1B] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#D6A343]/40"
          />
          <p className="mt-1.5 text-xs text-slate-500">
            Leave at 0 if your finance doesn't include a balloon payment.
            Commonly 20–35% of the vehicle price on South African deals.
          </p>
        </div>
      </div>
    </CalculatorLayout>
    <CalculatorArticle {...carRepaymentContent} />
    </>
  );
}