import { useState } from 'react';
import StyledRoundedCard from '../shared/StyledRoundedCard';
import heroImage from '../../../public/src/img/format/hero.jpg';
import solanaFormat from '../../../public/src/img/format/solana-format.png';
import formatBannerLogo from '../../../public/src/img/format/banner-logo.png';
import SolanaPay from '../../../public/src/img/format/solanapay.inline.svg';
import TipLink from '../../../public/src/img/format/tiplink.inline.svg';
import MagicEden from '../../../public/src/img/format/magiceden.inline.svg';
import Twitter from '../../../public/src/img/format/twitter.inline.svg';
import Image from 'next/legacy/image';
import styled from 'styled-components';
import { InlineLink } from '../../utils/Link';
import VideoModal from '../shared/VideoModal';
import Button from '../shared/Button';
import Play from '../../../public/src/img/format/play.inline.svg';

const StyledImage = styled.div`
  position: relative;
  height: 750px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 450px;
  }

  .linear-gradient {
    position: absolute;
    bottom: 0;
    height: 150px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .video-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StyledBanner = styled.div`
  background: #222;
  padding: 1rem;
  border-radius: 2rem;

  @media (min-width: 992px) {
    background-image: url('/src/img/format/banner-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .social {
    font-size: 0.9rem;
    background: rgba(255, 255, 255, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 2rem;

    a {
      color: #fff;
      font-weight: bold;
    }

    .poweredby {
      white-space: nowrap;
      font-size: 0.75rem;
    }
  }
`;

const FormatHero = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <>
      <div>
        <StyledImage>
          <Image src={heroImage} alt="" objectFit="cover" layout="fill" />
          <div className="video-btn">
            <Button
              onClick={() => {
                setShowVideoModal(true);
              }}
              variant="inverted"
              className="p-5 rounded-circle"
            >
              <Play />
            </Button>
          </div>
          <div className="linear-gradient">
            <div className="container">
              <Image
                src={solanaFormat}
                alt="FORMAT Festival x Solana Foundation"
                layout="responsive"
              />
            </div>
          </div>
        </StyledImage>
        <div className="container py-10 my-10">
          <div className="w-md-75 m-auto">
            <p className="mb-4">
              <strong>{format.hero.subtitle}</strong>
            </p>
            <p>
              components=
              {{
                formatLink: <InlineLink to="https://www.format-festival.com/" />,
                artistLink: <InlineLink to="https://www.instagram.com/nancybakercahill/" />,
                auctionLink: (
                  <InlineLink to="https://www.magiceden.io/auction/slipstream_entanglement_08" />
                ),
              }}
              />
            </p>
            <p>{format.hero.dates}</p>
          </div>

          <StyledBanner>
            <div className="row align-items-center my-4 mx-md-8">
              <div className="col-md-4">
                <Image src={formatBannerLogo} alt="" />
              </div>
              <div className="col-md-8">
                <div className="h4">{format.claim.title}</div>
                <div className="w-md-75 mb-6">
                  <p>{format.claim.description}</p>
                </div>
                <Button to="https://tiplink.io/format" arrowRight size="large" newTab>
                  {format.claim.cta}
                </Button>
              </div>
            </div>
            <div className="social mt-6">
              <div className="d-lg-flex justify-content-between align-items-center">
                <p className="m-0">
                  <Twitter className="me-2" /> components=
                  {{
                    tipLink: <InlineLink to="https://twitter.com/tiplinkofficial" />,
                    solanaSpacesLink: <InlineLink to="https://twitter.com/solanaspaces" />,
                  }}
                  />
                </p>
                <p className="m-0 poweredby">
                  {format.claim.social.poweredby}
                  <InlineLink to="https://tiplink.io/" className="ms-2">
                    <TipLink fill="currentcolor" width="55" />
                  </InlineLink>
                </p>
              </div>
            </div>
          </StyledBanner>
        </div>

        <div className="container">
          <div className="row my-10">
            <div className="col-lg-6 my-5">
              <StyledRoundedCard bgColor="#1c1c1c" className="h-100 p-6 text-white">
                <h2 className="h3 mb-6">{format.concessions.title}</h2>
                <p className="mb-0">{format.concessions.description}</p>

                <div className="mt-6">
                  <InlineLink to="https://solanapay.com/" className="me-4">
                    <SolanaPay width="120" height="50" />
                  </InlineLink>
                  <InlineLink to="https://tiplink.io/">
                    <TipLink width="180" height="50" />
                  </InlineLink>
                </div>
              </StyledRoundedCard>
            </div>
            <div className="col-lg-6 my-5">
              <StyledRoundedCard bgColor="#1c1c1c" className="h-100 p-6 text-white">
                <h2 className="h3 mb-6">{format.slipstream.title}</h2>
                <p className="mb-0">
                  components=
                  {{
                    auctionLink: (
                      <InlineLink to="https://www.magiceden.io/auction/slipstream_entanglement_08" />
                    ),
                  }}
                  />
                </p>
                <div className="mt-6">
                  <InlineLink
                    to="https://www.magiceden.io/auction/slipstream_entanglement_08"
                    className="me-4"
                  >
                    <MagicEden width="200" height="50" />
                  </InlineLink>
                </div>
              </StyledRoundedCard>
            </div>
          </div>
        </div>
      </div>
      <VideoModal
        type="vimeo"
        showVideoModal={showVideoModal}
        setShowVideoModal={setShowVideoModal}
        urlId="754164388"
      />
    </>
  );
};

export default FormatHero;
