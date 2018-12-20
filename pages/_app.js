import React from 'react';
import App, { Container } from 'next/app';

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
        <Component {...this.state} {...pageProps} />
      </Container>
    );
  }
}
