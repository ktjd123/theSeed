import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

import { PageHead } from '../components';
import { Home } from '../pageTemplate';

interface Props {}
@observer
export default class Index extends Component<Props> {
  render() {
    return (
      <div>
        <PageHead title="the seed" />

        <Home />
      </div>
    );
  }
}
