import React from 'react';
import Typed from 'react-typed';
import TextLoop from 'react-text-loop';

import classNames from 'classnames/bind';

import styles from './index.scss';

import Background from './Background';

const cx = classNames.bind(styles);

export default () => (
  <div className={cx('first')}>
    <div className={cx('title')}>
      <Typed
        typeSpeed={100}
        backSpeed={100}
        loop
        strings={[
          'Aiaikasa : Artist',
          'Aiaikasa : Partner',
          'Aiaikasa : Entertainment',
          'Aiaikasa : Money',
          'Aiaikasa : Social media',
          'Aiaikasa : SNS',
        ]}
      />
    </div>

    <div className={cx('description')}>
      <TextLoop speed={100}>
        <span>
재미있는
        </span>
        <span>
활기찬
        </span>
        <span>
아름다운
        </span>
        <span>
유익한
        </span>
        <span>
예쁜
        </span>
        <span>
즐거운
        </span>
        <span>
너의
        </span>
      </TextLoop>
      &nbsp;Aiaikasa
      <br />
      <br />
      <br />
      모두가 함께 만들어가는
      {' '}
      <span className={cx('logo')}>
Aiaikasa
      </span>
    </div>

    <div className={cx('name')}>
김성민
    </div>
    <Background />
  </div>
);
