import React, { Component } from 'react';
import Head from '../components/PageHead';
import Default from '../components/Default';
import Default2 from '../components/Default2';

export default class index extends Component {
  componentDidMount = () => {};

  render() {
    return (
      <div>
        <Head title="index page" description="this is index page" />
        <Default />
        <Default2 />
      </div>
    );
  }
}
