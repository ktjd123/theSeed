import React, { Component } from 'react';

import classNames from 'classnames/bind';
import styles from './index.scss';

const cx = classNames.bind(styles);

export default class index extends Component {
  loop = undefined;

  state = {
    count: 1,
  };

  componentDidMount = () => {
    this.loop = setInterval(() => {
      this.setState({
        count: Math.floor(Math.random() * (12 - 1 + 1)) + 1,
      });
    }, 2000);
  };

  componentWillUnmount = () => {
    clearInterval(this.loop);
  };

  render() {
    const { count } = this.state;
    return (
      <div className={cx('background')}>
        <div className={cx('comp', 'i1', count === 1 ? 'point' : undefined)} />
        <div className={cx('comp', 'i2', count === 2 ? 'point' : undefined)} />
        <div className={cx('comp', 'i3', count === 3 ? 'point' : undefined)} />
        <div className={cx('comp', 'i4', count === 4 ? 'point' : undefined)} />
        <div className={cx('comp', 'i5', count === 5 ? 'point' : undefined)} />
        <div className={cx('comp', 'i6', count === 6 ? 'point' : undefined)} />
        <div className={cx('comp', 'i7', count === 7 ? 'point' : undefined)} />
        <div className={cx('comp', 'i8', count === 8 ? 'point' : undefined)} />
        <div className={cx('comp', 'i9', count === 9 ? 'point' : undefined)} />
        <div className={cx('comp', 'i10', count === 10 ? 'point' : undefined)} />
        <div className={cx('comp', 'i11', count === 11 ? 'point' : undefined)} />
        <div className={cx('comp', 'i12', count === 12 ? 'point' : undefined)} />
      </div>
    );
  }
}
