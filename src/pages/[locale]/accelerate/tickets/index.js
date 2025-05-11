import TicketsPage from "./tickets.js";

export default function Page(props) {
  return <TicketsPage {...props} />;
}

export async function getStaticProps({ params }) {

  return {
    props: {
      params,
    },
  };
}

export async function getStaticPaths() {
  return {
    fallback: "blocking",
  };
}
