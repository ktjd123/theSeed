import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { PageHead, Auth } from '../components';

@observer
class index extends Component {
  render() {
    return (
      <div>
        <PageHead />
        <Auth />
      </div>
    );
  }
}
export default index;
