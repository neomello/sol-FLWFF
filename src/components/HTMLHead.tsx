import Head from "next/head";
import { usePathname } from "next/navigation";

type HTMLHeadProps = {
  title?: string;
  description?: string;
  image?: string;
  addDefaultMeta?: boolean;
};

export default function HTMLHead({
  title = "Solana",
  description = "Solana is a high-performance blockchain supporting builders around the world creating crypto apps that scale today.",
  image = "/img/social/solana-social.jpg",
  addDefaultMeta = true,
}: HTMLHeadProps) {
  const pathname = usePathname();
  const url = `https://solana.com${pathname}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {addDefaultMeta && (
        <>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </>
      )}
    </Head>
  );
}
