import App from "next/app";
import {} from "mobx";
import { observer, Provider } from "mobx-react";
import Axios from "axios";

import { PageHead } from "../components";

import "../styles/default.scss";

@observer
export default class Index extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider>
        <PageHead />
        <Component {...pageProps} />
      </Provider>
    );
  }
}
