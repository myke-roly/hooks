import React, { memo } from 'react';

const Counter = ({ count }) => (
  <div>
    <h2>{count}</h2>
  </div>
);

export default memo(Counter)
