import React, { Component } from "react";
import {} from "mobx";
import { observer } from "mobx-react";
import Axios from "axios";

// import styles from "./index.module.scss";

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {}

@observer
export default class Index extends Component<Props> {
  componentDidMount() {
    Axios.get("/api/heart_beat").then(() => {
      console.log("success");
    });
  }

  render() {
    return <div>TheSeed</div>;
  }
}
