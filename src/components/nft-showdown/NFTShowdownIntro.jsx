import styles from "./NFTShowdownIntro.module.scss";
import Image from "next/image";
import NFTShowdownLogo from "../../../assets/nft-showdown/logo.png";
import Button from "../shared/Button";

const NFTShowdownIntro = () => {

  return (
    <div className="my-6">
      <div className={styles["nft-showdown-intro"]}>
        <Image
          src={NFTShowdownLogo}
          alt={nft-showdown.title}
          className="img-fluid"
          width={960}
          height={592}
          placeholder="blur"
        />
        <div className="mb-6">
          <div className="mono section-title h6 fw-normal">
            {nft-showdown.intro.title}:
          </div>
          <h1 className="h3">{nft-showdown.intro.heading}</h1>
          <h2 className="h6 mono fw-normal">{nft-showdown.intro.lead}</h2>
        </div>
        <p>{nft-showdown.intro.description-1}</p>
        <div className="my-10 text-center">
          <Button
            to="/news/solana-nft-showdown-winners"
            variant="secondary"
            size="large"
            newTab
          >
            {nft-showdown.cta}
          </Button>
        </div>
        <div className="ratio ratio-16x9 my-6">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/7fE-OL_xTnw"
            title={nft-showdown.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p>{nft-showdown.intro.description-2}</p>
        <p>{nft-showdown.intro.description-3}</p>
        <p>{nft-showdown.intro.description-4}</p>
      </div>
    </div>
  );
};

export default NFTShowdownIntro;
