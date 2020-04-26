import React, { Component } from 'react';
import Head from 'next/head';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

interface Props {
  title?: string;
  image?: string;
  description?: string;
  url?: string;
}
@observer
export default class Index extends Component<Props> {
  render() {
    const { title = '', description = '데키나', image = '/dekina.png', url = 'http://company.dekina.com' } = this.props;
    return (
      <Head>
        <title>데키나 {title}</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        />
        <link rel="shortcut icon" href="/static/avg_logo.svg" />

        <meta property="og:site_name" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`데키나 ${title}`} />
        <meta property="og:image" content={url + image} />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
      </Head>
    );
  }
}
