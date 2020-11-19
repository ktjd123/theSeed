import React, { Component } from 'react';
import Router from 'next/router';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

interface Props {}
export default class Index extends Component<Props> {
  componentDidMount() {
    Router.push('/');
  }

  render() {
    return <div />;
  }
}
