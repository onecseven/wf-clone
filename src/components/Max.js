import React, { Component } from 'react';

const Max = ({obj, maximize}) => {
  return (
    <button
    onClick={e => {
      maximize(obj)
    }}
  >
  •
  </button>
  )
};

export default Max;
