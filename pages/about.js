import React from 'react';
import { withRouter } from 'next/router';

function about({ router }) {
  return <div>{router.query.id}</div>;
}

export default withRouter(about);
