import React from 'react';

function wrapper({ children, style }) {
  return (
    <div className="bg-white shadow-sm absolute text-black rounded-lg box-border overflow-hidden list-none w-full">
      {children}
    </div>
  );
}

export default wrapper;
