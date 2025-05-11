import HTMLHead from "@/components/HTMLHead";
import Layout from "@/components/layout";
import EnvironmentHero from "@/components/environment/EnvironmentHero";
import EnvironmentReport from "@/components/environment/EnvironmentReport";
import EnvironmentWhatYouCanDo from "@/components/environment/EnvironmentWhatYouCanDo";
import EnvironmentFeaturedProjects from "@/components/environment/EnvironmentFeaturedProjects";

const EnvironmentPage = () => {

  return (
    <Layout>
      <HTMLHead
        title={environment.title}
        description={environment.description}
      />
      <EnvironmentHero />
      <EnvironmentReport />
      <EnvironmentFeaturedProjects />
      <EnvironmentWhatYouCanDo />
    </Layout>
  );
};

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

export default EnvironmentPage;
