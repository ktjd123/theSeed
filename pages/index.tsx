import React, { Component } from 'react';
import {} from 'mobx';
import { observer, inject } from 'mobx-react';

import { Home } from '../containers';

interface Props {}

@observer
export default class Index extends Component<Props> {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}
