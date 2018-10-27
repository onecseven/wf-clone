import React, { Component } from 'react';

const Min = ({obj, showChildren}) => {
  return (
    <button
    className='zoom'
    onClick={e => {
      showChildren(obj)
    }}
  >
  {obj.showChildren ? "-" : "+"}
  </button>
  )
};

export default Min;
