import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.scss';

import Title from '../Title';

const cx = classNames.bind(styles);

export default () => (
  <div className={cx('second')}>
    <Title>
개발 취지
    </Title>
    <div className={cx('plus')}>
      <img src="/images/ya.jpg" alt="youtube" className={cx('logo-image')} />
      <span className={cx('big')}>
+
      </span>
      <img src="/images/in.jpg" alt="instagram" className={cx('logo-image')} />
    </div>
    <span className={cx('e-90')}>
=
    </span>

    <span className={cx('logo')}>
Aiaikasa
    </span>
  </div>
);
