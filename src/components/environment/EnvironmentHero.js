import classNames from "classnames";
import styles from "./EnvironmentHero.module.scss";
import { Button } from "@solana-foundation/solana-lib";

export default function EnvironmentHero() {

  return (
    <>
      <section className={classNames("container", styles["environment-hero"])}>
        <div className="row">
          <div className="col-12 col-lg-6">
            <h1 className={styles["environment-hero__title"]}>
              {environment.hero.title-part-1}
              <br />
              {environment.hero.title-part-2}
            </h1>
            <p
              className={classNames(
                "subdued",
                styles["environment-hero__subtitle"],
              )}
            >
              {environment.hero.subtitle}
            </p>
            <Button
              url={"https://solanaclimate.com/"}
              hierarchy={"outline"}
              endIcon={"arrow-up-right"}
              size={"lg"}
              iconSize={"md"}
              className="me-2 mb-2"
            >
              {environment.cta-data}
            </Button>
            <Button
              url="https://solana.com/news/announcing-real-time-emissions-measurement-on-the-solana-blockchain"
              hierarchy={"outline"}
              size={"lg"}
            >
              {environment.energy.cta}
            </Button>
          </div>
        </div>
      </section>
      <div className={styles["environment-hero__background"]}></div>
    </>
  );
}
