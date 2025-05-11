import Image from "next/legacy/image";
import Button from "../../../shared/Button";
import OverviewImg from "../../../../../assets/hackathon/overview.png";
import styles from "./HackathonOverviewSection.module.scss";

export default function HackathonOverviewSection({ onGetNotified }) {

  return (
    <section className={styles["overview"]}>
      <div className="container">
        <div className={styles["overview__content"]}>
          <div className={styles["overview__content--graphic"]}>
            <Image
              layout="intrinsic"
              src={OverviewImg}
              alt="hackathon-overview"
            />
          </div>
          <div className={styles["overview__content--cta-contents"]}>
            <h2 className={styles["title"]}>{hackathon.overview.title}</h2>
            <p className="subdued">{hackathon.overview.description}</p>
            <Button onClick={onGetNotified} variant="secondary">
              {hackathon.overview.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
