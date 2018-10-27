import React, { Component } from 'react';

const Del = ({obj, delet}) => {
  return (
    <button
    onClick={e => {
      delet(obj)
    }}
  >
  x
  </button>
  )
};

export default Del;
