import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

@observer
class c extends Component {
  @observable number = 0;

  @action increase = () => {
    this.number += 1;
  };

  @action decrease = () => {
    this.number -= 1;
  };

  render() {
    const { number, increase, decrease } = this;
    return (
      <div>
        <h1>{number}</h1>
        <button type="button" onClick={increase}>
          +
        </button>
        <button type="button" onClick={decrease}>
          -
        </button>
      </div>
    );
  }
}

export default c;
