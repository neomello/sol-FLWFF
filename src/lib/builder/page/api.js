import { Builder, builder } from "@builder.io/react";
import { PAGE_BUILDER_CONFIG } from "./constants";

builder.apiVersion = "v3";
Builder.isStatic = true;

const withTimeout = (promise, ms) =>
  Promise.race([
    promise,
    new Promise((_, reject) =>
        ms,
      ),
    ),
  ]);

export async function getAllPagesWithSlug() {
  try {
      builder.getAll(PAGE_BUILDER_CONFIG.pagesModel, {
        options: {
          noTargeting: true,
          cache: "force-cache",
        },
        apiKey: PAGE_BUILDER_CONFIG.apiKey,
        fields: "data",
      }),
      5000,
    );
  } catch (error) {
    console.error("[getAllPagesWithSlug] Error:", error.message);
    return [];
  }
}

  try {
    const slugs = slug === "/" ? "/" : { $in: [slug, `/${slug}`] };

      builder
          includeRefs: true,
          staleCacheSeconds: 60,
          userAttributes: {
            urlPath: slug,
          },
          options: {
            noTargeting: true,
          },
          query: {
            "data.slug": slugs,
          },
        })
        .toPromise(),
      8000,
    );

    return page || null;
  } catch (error) {
    console.error("[getPage] Error:", {
      slug,
      error: error.message,
    });
    return null;
  }
}
