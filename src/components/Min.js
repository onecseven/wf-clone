import React, { Component } from 'react';

const Min = ({obj, showChildren}) => {
  return (
    <button
    onClick={e => {
      showChildren(obj)
    }}
  >
  {obj.showChildren ? "-" : "+"}
  </button>
  )
};

export default Min;
