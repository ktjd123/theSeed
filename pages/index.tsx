import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

import { Home } from '../pageTemplate';
import { PageHead } from '../components';

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
