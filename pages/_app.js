import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'mobx-react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { css } from 'glamor';

// stores
import CounterStore from '../store/counter';

import { PageHead } from '../components';

import '../styles/default.scss';

const counter = new CounterStore();

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <PageHead />
        <ToastContainer
          autoClose={3000}
          position="bottom-center"
          toastClassName={css({
            background: 'black',
          })}
        />
        <Provider counter={counter}>
          <Component {...this.state} {...pageProps} />
        </Provider>
      </Container>
    );
  }
}
