import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import "./components/listicle.js"
import Item from "./components/Item.js"
import list from "./components/listicle.js"

class App extends Component {
  constructor() {
    super()
    this.temp = new list()
    this.temp.enter("hello")
    this.temp.enter("how are u")
    this.state = {
      array: this.temp.store,
      backButton: false
    }
    this.keypress = this.keypress.bind(this)
    this.showChildren = this.showChildren.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.maximize = this.maximize.bind(this)
    this.back = this.back.bind(this)
  }
  maximize(obj) {
    console.log('Maximize: ', obj)
    this.setState({
      array: [obj],
      backButton: true,
      lastKeypress: null
    })
  }

  back() {
    this.setState({
      array: this.temp.store,
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
      this.temp.enter(`New item`, obj)
    } else if (event.key === "Shift") {
      event.preventDefault()
      this.temp.tab(obj)
    } else if (event.key === "Alt") {
      event.preventDefault()
      this.temp.untab(obj)
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
        {this.state.array.map((el, index) => {
          return (
            <Item
              key={index}
              change={this.handleChange}
              keypress={this.keypress}
              maximize={this.maximize}
              obj={el}
              showChildren={this.showChildren}
              text={el.value}
              children={el.children}
            />
          )
        })}
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
