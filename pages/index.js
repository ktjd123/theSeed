import React, { Component } from 'react';
import Head from '../components/PageHead';
import Default from '../components/Default';
import Default2 from '../components/Default2';

class index extends Component {
  static getInitialProps = async () => ({ o: 'hi' });

  render() {
    return (
      <div>
        <Head title="index page" description="this is index page" />
        <Default />
        <Default2 />
        {JSON.stringify(this.props)}
      </div>
    );
  }
}

export default index;
