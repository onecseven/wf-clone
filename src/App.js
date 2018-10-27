import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import "./components/listicle.js"
import Item from "./components/Item.js"
import list from "./components/listicle.js"

class App extends Component {
  constructor() {
    super()
    this.mainList = new list()
    this.mainList.enter("Welcome")
    this.state = {
      array: this.mainList.store,
      backButton: false
    }
    this.keypress = this.keypress.bind(this)
    this.showChildren = this.showChildren.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.maximize = this.maximize.bind(this)
    this.back = this.back.bind(this)
    this.del = this.del.bind(this)
  }
  maximize(obj) {
    this.setState({
      array: [obj],
      backButton: true,
      lastKeypress: null
    })
  }
  del(obj){
    this.mainList.delete(obj)
    this.forceUpdate()
  }

  back() {
    this.setState({
      array: this.mainList.store,
      backButton: false
    })
  }

  showChildren(obj) {
    obj.showChildren = !obj.showChildren
    this.forceUpdate()
  }
  handleChange(obj, text) {
    console.log(obj, 'text, ', text)
    obj.value = text
  }
  keypress(event, obj = null) {
    if (event.key === "Enter") {
      event.preventDefault()
      this.mainList.enter(`New item`, obj)
    } else if (event.key === "Shift") {
      event.preventDefault()
      this.mainList.tab(obj)
    } else if (event.key === "Alt") {
      event.preventDefault()
      this.mainList.untab(obj)
    }
    this.forceUpdate()
  }
  render() {
    return (
      <div className="App">
        {this.state.backButton ? 
        (<button onClick={this.back}> {"<-"} </button>)
        :
        null}
        {this.state.array.length > 0 ? this.state.array.map((el, index) => {
          return (
            <Item
              key={index}
              delet={this.del}
              change={this.handleChange}
              keypress={this.keypress}
              maximize={this.maximize}
              obj={el}
              showChildren={this.showChildren}
              text={el.value}
              children={el.children}
            />
          )
        }) : 
        (<button onClick={(e) => {
          this.mainList.enter(`New List`)
          this.forceUpdate()
        }}>+</button>)
        }
      </div>
    )
  }
}
/*
TODO: 
- clean up
- css

*/

export default App
