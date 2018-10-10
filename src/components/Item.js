import React, { Component } from 'react';
import './listicle.js'

// test = { 
//   sarah: null,
//   poetry: {
//     time: null,
//     rope: {
//       why: null,
//       not: null,
//       stay: null,
//       inside: null,
//       its: null,
//       saturday: null,
//       after: null,
//       all: null,
//     }
//   }
// }

const Item = ({text, keypress}) => {
  return (
  <div tabIndex="0"  onKeyPress={keypress}>
    {text.value}
    </div>
  )
};

export default Item;
