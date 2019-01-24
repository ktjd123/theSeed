import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('counter')
@observer
class c extends Component {
  static async getInitialProps({ query }) {
    return query;
  }

  render() {
    const { counter } = this.props;
    return (
      <div>
        <h1>{counter.number}</h1>
        <button type="button" onClick={counter.increase}>
          +
        </button>
        <button type="button" onClick={counter.decrease}>
          -
        </button>
      </div>
    );
  }
}

export default c;
