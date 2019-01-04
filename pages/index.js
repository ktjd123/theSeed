import React, { Component } from 'react';
import Link from 'next/link';
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
        <Link prefetch as="/about/peter" href="/about?id=peter">
          Peter에 대하여
        </Link>
        <Link href="/about">About</Link>

        <Link href="/oejsifjesofoes">to 404</Link>

        {JSON.stringify(this.props)}
      </div>
    );
  }
}

export default index;
