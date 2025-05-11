"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AnnouncementBar } from "@solana-foundation/solana-lib";
import builder from "@builder.io/react";
import { BUILDER_CONFIG } from "../../lib/builder/builderConstants";
import styles from "./SitewideTopAlert.module.scss";

/**
 * Displays an Alert at the top of the window excluding
 * all the sub-pages that the alert message is linking to
 *
 * @returns {JSX.Element}
 */
export default function SitewideTopAlert() {
  const router = useRouter();
  const pathname = usePathname();
  const [announcementBarData, setAnnouncementBarData] = useState(null);

  useEffect(() => {
    // Fetch announcement bar data from Builder.io
    builder.apiVersion = "v3";
    builder
      .get("announcement-bar", {
        staleCacheSeconds: 20,
        userAttributes: {},
        options: {}
      })
      .promise()
      .then((response) => {
        setAnnouncementBarData({
          text: response.data.text,
          cta: {
            label: response.data.ctaLabel,
            url: response.data.ctaUrl,
          },
          color: response.data.color,
        });
      });
  }, []);

  if (
    pathname?.includes(announcementBarData?.cta?.url) ||
    pathname?.includes("/breakpoint/app")
  ) {
    return null;
  }

  return (
    <>
      {(announcementBarData?.text || announcementBarData?.cta?.label) && (
        <div className={styles["alertOuter"]}>
          <div className={styles["alertInner"]}>
            <AnnouncementBar {...announcementBarData} dismissable={false} />
          </div>
        </div>
      )}
    </>
  );
}
