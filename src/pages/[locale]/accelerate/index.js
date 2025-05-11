import AcceleratePage, {
  getStaticProps as getStaticPropsCatchAll,
} from "./[...slug]";

export default function Page(props) {
  // We use an index page instead of an optional catch-all route
  // because the optional catch-all route is 404ing in Vercel for localized routes
  // similar to https://github.com/vercel/next.js/issues/62657
  return <AcceleratePage {...props} />;
}

export async function getStaticProps({ params }) {
  return getStaticPropsCatchAll({ params });
}

export async function getStaticPaths() {
  return {
    fallback: "blocking",
  };
}
