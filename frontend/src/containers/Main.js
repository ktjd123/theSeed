import React, { Component } from 'react';
import { toast } from 'react-toastify';

class Main extends Component {
  componentDidMount() {
    toast.success('react-toastify');
  }

  render() {
    return (
      <div>
this is the seed
      </div>
    );
  }
}

export default Main;
