import { getPage } from '@/lib/builder/page/api';
import Page from './[...slug]';

export default function Home(props) {
  return (
    <div className="overflow-hidden">
      <Page {...props} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  try {
    return {
      props: {
        page: page || null,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
}

export async function getStaticPaths() {
  return {
    fallback: 'blocking',
  };
}
