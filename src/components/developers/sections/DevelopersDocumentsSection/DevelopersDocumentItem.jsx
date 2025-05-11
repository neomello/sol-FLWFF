import classNames from "classnames";
import { ArrowUpRight } from "react-feather";
import Button from "../../../shared/Button";
import styles from "./DevelopersDocumentItem.module.scss";

export default function DevelopersDocumentItem({
  title,
  description,
  url,
  newTab = true,
}) {

  return (
    <div className={styles["document-item"]}>
      <div
        className={classNames(
          styles["document-item__header"],
          "d-flex justify-content-between align-items-center",
        )}
      >
        <h3 className={styles["document-item__title"]}>{title}</h3>
        <Button
          to={url}
          newTab={newTab}
          className={styles["document-item__cta"]}
          aria-label={developers.documents.view-all}
        >
          <span>{developers.documents.view-all}</span>
          <ArrowUpRight strokeWidth={1} />
        </Button>
      </div>
      <p className={styles["document-item__description"]}>{description}</p>
    </div>
  );
}
