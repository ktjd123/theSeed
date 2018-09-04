import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.scss';

const cx = classNames.bind(styles);

export default () => (
  <div className={cx('background')}>
    <div className={cx('comp')} />
    <div className={cx('comp')} />
    <div className={cx('comp')} />
    <div className={cx('comp')} />
    <div className={cx('comp')} />
    <div className={cx('comp')} />
    <div className={cx('comp')} />
    <div className={cx('comp')} />
    <div className={cx('comp')} />
    <div className={cx('comp')} />
    <div className={cx('comp')} />
    <div className={cx('comp')} />
  </div>
);
