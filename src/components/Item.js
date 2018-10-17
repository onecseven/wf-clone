import React, { Component } from "react"
import Min from "./Min"
import Max from "./Max"

const Item = ({ text, keypress, children, obj, change, showChildren, maximize }) => {
  return (
    <div>
      <div
        tabIndex="0"
        onKeyDown={e => {
          keypress(e, obj)
        }}
      >
      <Min obj={obj} showChildren={showChildren}/>
      <Max obj={obj} maximize={maximize}/>
        <span
          onBlur={e => {
            change(obj, e.target.textContent)
          }}
          contentEditable
        >
          {text}
        </span>
      </div>
      <div>
      {children && obj.showChildren
        ? children.map((el, index) => (
            <Item
              key={index}
              change={change}
              showChildren={showChildren}
              obj={el}
              keypress={keypress}
              text={el.value}
              children={el.children}
              maximize={maximize}
            />
          ))
        : null}
        </div>
    </div>
  )
}

export default Item
