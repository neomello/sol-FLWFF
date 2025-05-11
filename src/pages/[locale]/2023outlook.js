
import Layout from "@/components/layout";
import HTMLHead from "@/components/HTMLHead";
import ECDRHero from "@/components/ecdr/ECDRHero";
import ECDRStats from "@/components/ecdr/ECDRStats";
import ECDRJoinCommunity from "@/components/ecdr/ECDRJoinCommunity";

const ECDRPage = () => {
  return (
    <Layout>
      <HTMLHead
        title={ecdr.title}
        description={ecdr.description}
        socialShare="https://solana.com/social/2023outlook.jpg"
      />
      <div className="overflow-hidden">
        <ECDRHero />
        <ECDRStats />
        <ECDRJoinCommunity />
      </div>
    </Layout>
  );
};

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

export default ECDRPage;
