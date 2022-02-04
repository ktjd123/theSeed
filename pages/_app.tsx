import App from "next/app";
import {} from "mobx";
import { observer, Provider } from "mobx-react";

import "../styles/default.scss";

@observer
export default class Index extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
