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

const innerKeypress = function (e) { //non bound
  if(e.key === 'Enter'){
    let t = this.state.array.slice()
    t.push(new listitem('enter'))
    this.setState({array: this.state.array.slice()})
  }  
}

const Item = ({text, keypress, children, obj}) => {
  return (
  <div>
    <div tabIndex="0"  onKeyDown={(e) => {
      keypress(e, obj)
    }}>
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
