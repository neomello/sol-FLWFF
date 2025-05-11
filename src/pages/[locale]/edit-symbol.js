// Integrating Builder Symbols
// https://www.builder.io/c/docs/integrate-symbols

import { builder, BuilderComponent } from "@builder.io/react";
import { PAGE_BUILDER_CONFIG } from "@/lib/builder/page/constants";
import customComponentsRegistration from "@/utils/customComponentGenerator";
import Head from "next/head";

builder.apiVersion = "v3";
customComponentsRegistration();

export default function Page() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <BuilderComponent model="symbol" />
    </>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
    },
  };
}

export async function getStaticPaths() {
  return {
    fallback: "blocking",
  };
}
