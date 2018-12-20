import React from 'react';
import classNames from 'classnames/bind';
import styles from './Default2.scss';

const cx = classNames.bind(styles);

export default function Default2() {
  return <div className={cx('div')}>TheSeed SCSS cssmodule Test</div>;
}
