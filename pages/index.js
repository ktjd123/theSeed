import React, { Component } from 'react';
import Head from '../components/PageHead';

export default class index extends Component {
  componentDidMount = () => {};

  render() {
    return (
      <div>
        <Head title="index page" description="this is index page" />
        This is index page
      </div>
    );
  }
}
