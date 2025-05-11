import Layout from "@/components/layout";
import HTMLHead from "@/components/HTMLHead";
import RampLayout from "@/components/ramps/RampsLayout";
import {
  rampData,
  fiatAssets,
  countries,
  paymentRails,
} from "@/data/ramps/ramps-data";

const Solanaramp = () => {

  return (
    <Layout>
      <HTMLHead
        title={on-off-ramp.meta.title}
        description={on-off-ramp.meta.description}
      />
      <RampLayout
        data={rampData}
        fiatAssetsOptions={fiatAssets}
        countryOptions={countries}
        paymentRailsOptions={paymentRails}
      />
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

export default Solanaramp;
