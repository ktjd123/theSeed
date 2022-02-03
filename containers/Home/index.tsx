import React, { Component } from "react";
import {} from "mobx";
import { observer, inject } from "mobx-react";
import styles from "./index.module.scss";

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {}

@observer
export default class Index extends Component<Props> {
  render() {
    return <div>TheSeed</div>;
  }
}
