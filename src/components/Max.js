import React, { Component } from 'react';

const Max = ({obj, maximize}) => {
  return (
    <button
    className="zoom"
    onClick={e => {
      maximize(obj)
    }}
  >
  •
  </button>
  )
};

export default Max;
