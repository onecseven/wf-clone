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
          onChange={e => {
            change(obj, e.target.value)
          }}
          contentEditable
        >
          {text ? text : "     "}
        </span>
      </div>
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
  )
}

export default Item
