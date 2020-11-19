import React from 'react';
import App from 'next/app';
import { Provider } from 'mobx-react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// stores
import { AuthStore } from '../store';

import { PageHead } from '../components';

import '../styles/default.scss';

const auth = new AuthStore();

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider auth={auth}>
        <PageHead />
        <ToastContainer autoClose={3000} position="bottom-center" />
        <Component {...this.state} {...pageProps} />
      </Provider>
    );
  }
}
