import React from "react";
import Head from "next/head";

interface Props {
  title: string;
  description?: string;
  image?: string;
  slug: string;
}

const SEO = ({ title, description, image, slug }: Props) => {
  const url = "https://lries.com" + slug;
  const seoImage = image || "https://lries.com/images/logo.png";

  return (
    <Head>
      {/* General tags */}
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta name="image" content={seoImage} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={seoImage} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@lriesenfeld" />
      <meta name="twitter:site" content="@lriesenfeld" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={seoImage} />
    </Head>
  );
};

export default SEO;
