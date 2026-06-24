import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero";
import ToolsPreview from "../components/home/ToolsPreview";
import WhyUseMitools from "../components/home/WhyUseMitools";
import ArticlesSection from "../components/home/ArticlesSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>MiTools | Free Financial Calculators South Africa</title>
        <meta
          name="description"
          content="Free South African financial calculators for car repayments, bond home loans, investment growth, and income tax. Fast, accurate tools to help you plan smarter money decisions."
        />
        <link rel="canonical" href="https://mitools.app/" />
        <meta property="og:title" content="MiTools | Free Financial Calculators South Africa" />
        <meta
          property="og:description"
          content="Free South African financial calculators for car repayments, bond home loans, investment growth, and income tax. Plan smarter with MiTools."
        />
        <meta property="og:url" content="https://mitools.app/" />
        <meta property="og:image" content="https://mitools.app/og-image.png" />
      </Helmet>
      <Hero />
      <ToolsPreview />
      <WhyUseMitools />
      <ArticlesSection />
      <CTASection />
    </>
  );
}
