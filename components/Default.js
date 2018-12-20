import React from 'react';
import classNames from 'classnames/bind';
import styles from './Default.scss';

const cx = classNames.bind(styles);

export default function Default() {
  return <div className={cx('div')}>This is The Seed</div>;
}
