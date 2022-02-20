import React, { Component } from "react";
import {} from "mobx";
import { observer } from "mobx-react";

import { Home } from "../containers";

interface Props {}

@observer
export default class Index extends Component<Props> {
  static async getInitialProps({ query }: { query: any }) {
    return { ...query, namespacesRequired: ["common"] };
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Home />
      </div>
    );
  }
}
