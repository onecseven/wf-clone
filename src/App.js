/* global chrome */
import React, { Component } from "react"
import "./components/listicle.js"
import Item from "./components/Item.js"
import list from "./components/listicle.js"

class App extends Component {
  constructor() {
    super()
    this.mainList = new list()
    chrome.storage.sync.get(["mainList"], result => {
      this.mainList.store = result.mainList.store
      if (result.mainList.store) {
        this.setState({ array: result.mainList.store })
        console.log(JSON.stringify(result.mainList.store, null, 2))
      }
    })
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
  del(obj) {
    this.mainList.delete(obj)
    this.forceUpdate()
  }

  back() {
    this.setState({
      array: this.mainList.store,
      backButton: false
    })
  }
  componentDidMount() {
    chrome.storage.sync.get(["mainList"], result => {
      this.mainList.store = result.mainList.store
      if (result.mainList.store) {
        this.setState({ array: result.mainList.store })
        console.log(this.state)
      }
    })
  }

  showChildren(obj) {
    obj.showChildren = !obj.showChildren
    this.forceUpdate()
  }
  handleChange(obj, text) {
    console.log(obj, "text, ", text)
    obj.value = text
  }
  keypress(event, obj = null) {
    console.log(event.key)
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
  componentDidUpdate() {
    if (this.state.array && this.state.array.length > 0) {
      chrome.storage.sync.set({ mainList: this.mainList }, function() {
      })
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.backButton ? (
          <button className="zoom" onClick={this.back}>
            {" "}
            {"<-"}{" "}
          </button>
        ) : null}
        {this.state.array.length > 0 ? (
          this.state.array.map((el, index) => {
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
          })
        ) : (
          <button
            onClick={e => {
              this.mainList = new list()
              this.mainList.enter(`Welcome`)
              chrome.storage.sync.set({ mainList: this.mainList }, () => {})
              this.setState({ array: this.mainList.store })
            }}
          >
            +
          </button>
        )}
      </div>
    )
  }
}
/*
TODO: 
-rewrite props
- css

*/

export default App
