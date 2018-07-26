import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { css } from 'glamor';

import { Main } from './containers';
import './styles/index.scss';

export default () => (
  <BrowserRouter>
    <div>
      <ToastContainer
        autoClose={3000}
        position="bottom-center"
        toastClassName={css({
          background: 'black',
        })}
      />
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </div>
  </BrowserRouter>
);
