import React from 'react';
import App, { Container } from 'next/app';

import { PageHead } from '../components';

import '../styles/default.scss';

export default class MyApp extends App {
  state = {
    a: 'a',
  };

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount = () => {
    this.setState({ a: 'b' });
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <PageHead />
        <Component {...this.state} {...pageProps} />
      </Container>
    );
  }
}
