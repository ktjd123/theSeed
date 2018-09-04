import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.scss';

import { Title } from '..';

const cx = classNames.bind(styles);

export default () => (
  <div className={cx('second')}>
    <Title>
개발 취지
    </Title>
  </div>
);
