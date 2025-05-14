import Layout from '@/components/layout';
import HTMLHead from '@/components/HTMLHead';
import EmailSubscribeForm from '@/components/shared/EmailSubscribeForm';

const NewsletterPage = () => {
  return (
    <Layout>
      <HTMLHead title={titles.newsletter} />
      <section className="mt-n12">
        <div className="container d-flex flex-column">
          <div className="row align-items-center justify-content-center g-0 min-vh-100">
            <div className="col-12 col-md-6 col-lg-5 py-8 py-md-11">
              <h3 className="mb-0 fw-bold text-white">{newsletter.signup}</h3>
              <p className="mb-6">{newsletter.spam}</p>
              <EmailSubscribeForm formId="fdd4a0db-f4af-4b29-90f9-98b0556d4c89" />
            </div>
          </div>
        </div>
      </section>
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

export default NewsletterPage;
