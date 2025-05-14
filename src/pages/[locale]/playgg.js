import PlayGGLayout from '@/components/playgg/PlayGGLayout';
import HTMLHead from '@/components/HTMLHead';
import PlayGGSplash from '@/components/playgg/PlayGGSplash';
import PlayGGGames from '@/components/playgg/PlayGGGames';

const PlayGG = () => {
  return (
    <PlayGGLayout>
      <HTMLHead
        title={playgg.title}
        description={playgg.description}
        socialShare="https://solana.com/social/playgg.jpg"
      />
      <PlayGGSplash />
      <PlayGGGames />
    </PlayGGLayout>
  );
};

export async function getStaticProps({ params }) {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  return {
    fallback: 'blocking',
  };
}

export default PlayGG;
