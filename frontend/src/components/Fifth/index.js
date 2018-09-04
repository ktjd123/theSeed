import React from 'react';
import classNames from 'classnames/bind';

import styles from './index.scss';

import Title from '../Title';

const cx = classNames.bind(styles);

export default () => (
  <div className={cx('fifth')}>
    <Title>
다음주 계획
    </Title>

    <p className={cx('plan')}>
      1. Backend
      <br />
      &nbsp;&nbsp;&nbsp;- Login
      <br />
      &nbsp;&nbsp;&nbsp;- Register
      <br />
      <br />
      <br />
      2. Frontend
      <br />
      &nbsp;&nbsp;&nbsp;- Login View
      <br />
      &nbsp;&nbsp;&nbsp;- Register View
      <br />
      <br />
      <br />
      3. DB
      <br />
      &nbsp;&nbsp;&nbsp;- Account Modeling
    </p>
  </div>
);
