import { observable, action, computed } from 'mobx';

export default class counter {
  @observable number = 1;

  @action increase = () => {
    this.number += 1;
  };

  @action decrease = () => {
    this.number -= 1;
  };
}
