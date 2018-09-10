import React from 'react';
import classNames from 'classnames/bind';

import styles from './index.scss';

import Title from '../Title';

const cx = classNames.bind(styles);

export default () => (
  <div className={cx('fourth')}>
    <Title>
기능
    </Title>
    <iframe src="https://www.aiaikasa.com" title="aiaikasa" className={cx('iframe')} />
  </div>
);
