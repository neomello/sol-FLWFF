import Layout from '@/components/layout';
import HTMLHead from '@/components/HTMLHead';

import FormatNFTVolume from '@/components/format/FormatNFTVolume';
import FormatHero from '@/components/format/FormatHero';
import FormatEcosystem from '@/components/format/FormatEcosystem';

const Format = () => {
  return (
    <Layout>
      <HTMLHead
        title={format.title}
        description={format.description}
        socialShare="https://solana.com/social/format.jpg"
      />
      <div className="mt-n12 pt-12">
        <FormatHero />
        <FormatNFTVolume />
        <FormatEcosystem />
      </div>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  return {
    props: {},
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  return {
    fallback: 'blocking',
  };
}

export default Format;
