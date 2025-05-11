import classNames from "classnames";
import styles from "./DevelopersContentPage.module.scss";
import Link from "next/link";

export const PageNav = ({ nav }) => {

  return (
    <div
      className={classNames(
        styles["developers-content-page__nav"],
        "d-flex flex-column flex-md-row justify-content-between mt-10 small",
      )}
    >
      {nav.prev ? (
        <Link href={nav.prev.href}>
          <span>{developers.nav.prev}</span>
          <div>« {nav.prev.label}</div>
        </Link>
      ) : (
        <div>{/* flex display placeholder when index is first item */}</div>
      )}

      {nav.next ? (
        <Link href={nav.next.href}>
          <span>{developers.nav.next}</span>
          <div>{nav.next.label} »</div>
        </Link>
      ) : (
        <div>{/* flex display placeholder when index is last item*/}</div>
      )}
    </div>
  );
};
