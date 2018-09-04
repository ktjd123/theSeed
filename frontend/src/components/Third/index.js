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
    <div className={cx('platforms')}>
      <h1 className={cx('p-title')}>
Backend
      </h1>
      <div className={cx('wrapper')}>
        <img src="/images/node.png" alt="node" className={cx('img')} />
        <span className={cx('big')}>
+
        </span>
        <img src="/images/express.png" alt="node" className={cx('img')} />
      </div>

      <h1 className={cx('p-title')}>
Frontend
      </h1>

      <div className={cx('wrapper')}>
        <img src="/images/webpack.png" alt="node" className={cx('img')} />
        <span className={cx('big')}>
+
        </span>
        <img src="/images/react.png" alt="node" className={cx('img')} />
      </div>

      <h1 className={cx('p-title')}>
DB
      </h1>

      <div className={cx('wrapper')}>
        <img src="/images/mongo.png" alt="node" className={cx('img')} />
      </div>
    </div>
  </div>
);
