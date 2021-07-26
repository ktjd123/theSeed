import React, { Component } from 'react';
import ClassNames from 'classnames/bind';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import styles from './index.module.scss';

const cx = ClassNames.bind(styles);

interface Props {}
@observer
export default class Index extends Component<Props> {
  render() {
    return <div className={cx('main')}>hi</div>;
  }
}
