import React from 'react';

import classNames from 'classnames/bind';
import styles from './index.scss';

const cx = classNames.bind(styles);

export default ({ children }) => (
  <div className={cx('title')}>
    {children}
  </div>
);
