import React from 'react';
import classNames from 'classnames/bind';

import styles from './index.scss';

import Title from '../Title';

const cx = classNames.bind(styles);

export default () => (
  <div className={cx('third')}>
    <Title>
개발환경
    </Title>
  </div>
);
