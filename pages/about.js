import React from 'react';

export default function about({ url }) {
  return <div>{url.query.id}</div>;
}
