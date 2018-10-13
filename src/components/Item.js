import React, { Component } from 'react';
import listitem from  './listicle.js'

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

const Item = ({text, keypress, children, obj, change}) => {
  return (
  <div>
    <div tabIndex="0" 
    onChange={(e) => {
      change(obj, e.target.value)
    }}
    onKeyDown={(e) => {
      keypress(e, obj)
    }} contentEditable>
    {text}
    </div>
    {children ? 
      children.map((el, index) => (<Item  key={index} obj={el} keypress={keypress} text={el.value} children={el.children}></Item>))
    :
    null
    }
  </div>
  )
};

export default Item;
