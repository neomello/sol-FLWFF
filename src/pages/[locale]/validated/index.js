
import HTMLHead from "@/components/HTMLHead";
import Layout from "@/components/layout";
import PodcastApi from "@/lib/podcast";
import PodcastNavigation from "@/components/podcast/PodcastNavigation";
import PodcastOverviewSection from "@/components/podcast/PodcastOverviewSection";
import PodcastRecentEpisodesSection from "@/components/podcast/PodcastRecentEpisodesSection";
import PodcastStickyPlayer, {
  PodcastPlayerContextProvider,
} from "@/components/podcast/PodcastStickyPlayer";

export default function PodcastIndex({ episodes }) {

  return (
    <Layout>
      <HTMLHead
        title={podcast.title}
        description={podcast.description}
        socialShare="https://solana.com/social/validated.jpg"
      />
      <PodcastPlayerContextProvider episodes={episodes}>
        <div className="container">
          <PodcastStickyPlayer />
          <PodcastNavigation />
          <PodcastOverviewSection />
          <PodcastRecentEpisodesSection />
        </div>
      </PodcastPlayerContextProvider>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { episodes } = await PodcastApi.getEpisodes({
    limit: 5,
  });
  return {
    props: {
      episodes,
    },
    revalidate: 60,
  };
}
export async function getStaticPaths() {
  return {
    fallback: "blocking",
  };
}
