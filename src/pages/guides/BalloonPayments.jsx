import { Helmet } from "react-helmet-async";
import GuideLayout from "../../components/guides/GuideLayout";
import GuideArticle from "../../components/guides/GuideArticle";
import { balloonPaymentsContent } from "../../data/content/guides/balloonPaymentsContent";

export default function BalloonPayments() {
  const c = balloonPaymentsContent;
  return (
    <>
      <Helmet>
        <title>{c.title} | MiTools</title>
        <meta name="description" content={c.metaDescription} />
        <link rel="canonical" href={`https://mitools.app${c.path}`} />
        <meta property="og:title" content={`${c.title} | MiTools`} />
        <meta property="og:description" content={c.metaDescription} />
        <meta property="og:url" content={`https://mitools.app${c.path}`} />
        <meta property="og:image" content="https://mitools.app/og-image.png" />
      </Helmet>
      <GuideLayout
        eyebrow={c.eyebrow}
        title={c.title}
        description={c.metaDescription}
        readTime={c.readTime}
      >
        <GuideArticle
          intro={c.intro}
          sections={c.sections}
          keyTakeaways={c.keyTakeaways}
          faqs={c.faqs}
          relatedCalculators={c.relatedCalculators}
          relatedGuides={c.relatedGuides}
        />
      </GuideLayout>
    </>
  );
}
