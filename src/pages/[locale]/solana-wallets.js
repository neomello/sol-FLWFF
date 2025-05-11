import Layout from "@/components/layout";
import HTMLHead from "@/components/HTMLHead";
import WalletsLayout from "@/components/wallets/WalletsLayout";
import { walletData } from "@/data/wallets/wallet-data";

const SolanaWallets = ({ walletData }) => {
  return (
    <Layout>
      <HTMLHead
        title={wallets.meta.title}
        description={wallets.meta.description}
      />
      <WalletsLayout walletData={walletData} />
    </Layout>
  );
};

export async function getStaticProps({ params }) {

  return {
    props: {
      walletData: randomizedWallets,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  return {
    fallback: "blocking",
  };
}

export default SolanaWallets;
