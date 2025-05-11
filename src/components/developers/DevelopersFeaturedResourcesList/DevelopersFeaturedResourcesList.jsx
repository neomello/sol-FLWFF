import { memo } from "react";
import classNames from "classnames";
import styles from "./DevelopersFeaturedResourcesList.module.scss";
import DevelopersFeaturedResourcesListItem from "./DevelopersFeaturedResourcesListItem/DevelopersFeaturedResourcesListItem";

  items,
  translationTag = "featured-resources-list",
}) {
  return (
    <div
      id="featured"
      className={classNames(
        styles["developers-featured-resources-list"],
        "pb-10 mb-10 container",
      )}
    >
      <div className="row">
        <div className="col-md-12 col-lg-4 p-0">
          <p className="mb-7">
          </p>
        </div>
        <div
          className={classNames(
            styles["developers-featured-resources-list__resources"],
            "col-md-12 col-lg-8 p-0",
          )}
        >
          {items.map((item, id) => (
            <DevelopersFeaturedResourcesListItem
              key={id}
              item={item}
              translationTag={translationTag}
            />
          ))}
        </div>
      </div>
    </div>
  );
});
