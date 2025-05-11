
import HTMLHead from "@/components/HTMLHead";
import NFTShowdownLayout from "@/components/nft-showdown/NFTShowdownLayout";
import NFTShowdownIntro from "@/components/nft-showdown/NFTShowdownIntro";
import NFTShowdownPartners from "@/components/nft-showdown/NFTShowdownPartners";
import NFTShowdownFooter from "@/components/nft-showdown/NFTShowdownFooter";
import Layout from "@/components/layout";

export default function NFTShowdown() {

  return (
    <Layout>
      <NFTShowdownLayout>
        <HTMLHead
          title={nft-showdown.title}
          description={nft-showdown.description}
          socialShare="https://solana.com/social/nftshowdown.jpg"
        />
        <NFTShowdownIntro />
        <NFTShowdownPartners />
        <NFTShowdownFooter />
      </NFTShowdownLayout>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  return {
    fallback: "blocking",
  };
}
