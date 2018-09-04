import React, { Component } from 'react';
import { toast } from 'react-toastify';

import {
  First, Second, Third, Fourth, Fifth,
} from '../components';

class Main extends Component {
  state = {
    page: 0,
  };

  nextPage = () => {
    const { page } = this.state;
    if (page === 5) return;

    this.setState({
      page: page + 1,
    });
    if (page === 3) {
      toast.success('언제 다 해');
    }
  };

  previousPage = (e) => {
    const { page } = this.state;

    if (page === 0) return;

    this.setState({
      page: page - 1,
    });
    e.preventDefault();
    return false;
  };

  render() {
    const { page } = this.state;
    return (
      <div className="main" onClick={this.nextPage} onContextMenu={this.previousPage}>
        {page === 0 ? (
          <div>
            <First />
          </div>
        ) : (
          undefined
        )}
        {page === 1 ? (
          <div>
            <Second />
          </div>
        ) : (
          undefined
        )}
        {page === 2 ? (
          <div>
            <Third />
          </div>
        ) : (
          undefined
        )}
        {page === 3 ? (
          <div>
            <Fourth />
          </div>
        ) : (
          undefined
        )}
        {page === 4 ? (
          <div>
            <Fifth />
          </div>
        ) : (
          undefined
        )}
        {page === 5 ? (
          <div>
            <First />
          </div>
        ) : (
          undefined
        )}
      </div>
    );
  }
}

export default Main;
