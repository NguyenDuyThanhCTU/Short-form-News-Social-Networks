import React from 'react';

function wrapper({ children, style }) {
  return <div className={style}>{children}</div>;
}

export default wrapper;
