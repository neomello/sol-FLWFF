import styled from 'styled-components';

import Layout from '@/components/layout';
import HTMLHead from '@/components/HTMLHead';

import BrandingWelcome from '@/components/branding/BrandingWelcome';
import BrandingLogo from '@/components/branding/BrandingLogo';
import BrandingClearspace from '@/components/branding/BrandingClearspace';
import BrandingBannedLogos from '@/components/branding/BrandingBannedLogos';
import BrandingColors from '@/components/branding/BrandingColors';
import BrandingAssets from '@/components/branding/BrandingAssets';
import BrandingPress from '@/components/branding/BrandingPress';
import BrandingAnchorTags from '@/components/branding/BrandingAnchorTags';
import SimpleHero from '@/components/sharedPageSections/SimpleHero';

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  column-gap: 4rem;
  row-gap: 2rem;
  @media (min-width: 750px) {
    flex-direction: row;
    justify-content: space-between;
  }

  .left-content {
    display: flex;
    flex-direction: column;
    row-gap: 4rem;
    flex: 1;
    max-width: 680px;
  }

  .right-content {
    min-width: 240px;
    max-width: 100%;
    @media (min-width: 750px) {
      max-width: 240px;
      & > section {
        position: sticky;
        top: 3rem;
      }
    }
  }
`;

const Branding = () => {
  return (
    <Layout>
      <HTMLHead title={branding.title} description={branding.description} />
      <SimpleHero
        frontmatter={{
          title: branding.title,
        }}
      />
      <StyledMainContainer className="container pt-8">
        <div className="left-content">
          <BrandingWelcome />
          <BrandingLogo />
          <BrandingClearspace />
          <BrandingBannedLogos />
          <BrandingColors />
          <BrandingAssets />
          <BrandingPress />
        </div>
        <div className="right-content">
          <BrandingAnchorTags />
        </div>
      </StyledMainContainer>
    </Layout>
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

export default Branding;
