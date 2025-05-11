
import HTMLHead from "@/components/HTMLHead";
import Layout from "@/components/layout";
import PodcastApi from "@/lib/podcast";
import PodcastEpisodesSection from "@/components/podcast/PodcastEpisodesSection";
import PodcastNavigation from "@/components/podcast/PodcastNavigation";
import PodcastStickyPlayer, {
  PodcastPlayerContextProvider,
} from "@/components/podcast/PodcastStickyPlayer";

export default function PodcastIndex({ episodes, hasMore }) {

  return (
    <Layout>
      <HTMLHead
        title={podcast.episodes.title}
        description={podcast.episodes.description}
        socialShare="https://solana.com/social/validated.jpg"
      />
      <PodcastPlayerContextProvider episodes={episodes} hasMore={hasMore}>
        <div className="container">
          <PodcastStickyPlayer />
          <PodcastNavigation />
          <PodcastEpisodesSection />
        </div>
      </PodcastPlayerContextProvider>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { episodes, hasMore } = await PodcastApi.getEpisodes({
    limit: 15,
  });
  return {
    props: {
      episodes,
      hasMore,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  return {
    fallback: "blocking",
  };
}
