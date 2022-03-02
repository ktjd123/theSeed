import React, { Component } from "react";
import Head from "next/head";
import {} from "mobx";
import { observer } from "mobx-react";

interface Props {
  title?: string;
  image?: string;
  iconImg?: string;
  description?: string;
  url?: string;
}

@observer
export default class Index extends Component<Props> {
  render() {
    const {
      title = "Dekina",
      description = "Dekina",
      iconImg = "",
      image = "",
      url = "https://dekina.com",
    } = this.props;
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
          />
          <link rel="icon" href={iconImg} />

          <meta property="og:site_name" content={title} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${title}`} />
          <meta property="og:image" content={url + image} />
          <meta property="og:image:width" content="1000" />
          <meta property="og:image:height" content="1000" />
          <meta property="og:url" content={url} />
          <meta property="og:description" content={description} />
        </Head>
      </div>
    );
  }
}
