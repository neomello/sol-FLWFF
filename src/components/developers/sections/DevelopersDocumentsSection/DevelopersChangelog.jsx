import { ArrowRightCircle } from "react-feather";
import { truncateTextByWord } from "../../../../utils/stringUtils";
import Button from "../../../shared/Button";
import styles from "./DevelopersChangelog.module.scss";

export default function DevelopersChangelog({ latestVideo }) {
  if (!latestVideo) {
    return null;
  }

  return (
    <div className={styles["changelog"]}>
      <h3 className={styles["changelog__title"]}>Solana Changelog</h3>
      <p className={styles["changelog__description"]}>
        {truncateTextByWord(
          (
            latestVideo.snippet?.description ||
            "Latest changes for the Solana blockchain"
          ).spli---[0],
          160,
          "...",
        )}
      </p>
      <Button
        to={`https://www.youtube.com/watch?v=${latestVideo.snippet.resourceId.videoId}&list=${latestVideo.snippet.playlistId}`}
        newTab
        className={styles["changelog__cta"]}
      >
        <span>{developers.changelog.cta}</span>
        <ArrowRightCircle strokeWidth={1} />
      </Button>
    </div>
  );
}
