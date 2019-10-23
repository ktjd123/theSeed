import Head from "next/head";

const PageHead = ({
  title = "TheSeed",
  description = "Dekina Inc.",
  url = "localhost"
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="shortcut icon" href="/static/favicon.ico" />

    <meta property="og:site_name" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:image" content="/static/favicon.ico" />
    <meta property="og:image:width" content="1000" />
    <meta property="og:image:height" content="1000" />
    <meta property="og:url" content={url} />
    <meta property="og:description" content={description} />
  </Head>
);
export default PageHead;
