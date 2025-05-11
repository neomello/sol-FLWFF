
import Layout from "@/components/layout";
import HTMLHead from "@/components/HTMLHead";
import AiHero from "@/components/ai/AiHero";
import AiWhySection from "@/components/ai/AiWhySection";
import AiCard from "@/components/ai/AiCard";
// import AiHighlight from "@/components/ai/AiHighlight";
import AiBuild from "@/components/ai/AiBuild";

export default function AiPage() {
  return (
    <Layout>
      <HTMLHead title={ai.title} description={ai.description} />
      <div className="overflow-hidden pb-10 mb-n10">
        <AiHero />
        <AiWhySection />
        <AiCard />
        {/* <AiHighlight /> */}
        <AiBuild />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
    },
  };
}

export async function getStaticPaths() {
  return {
    fallback: "blocking",
  };
}
