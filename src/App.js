import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/listicle.js'
import Item from './components/Item.js'
import list from './components/listicle.js';

class App extends Component {
  constructor(){
    super();
    this.temp = new list()
    console.log(this.temp)
    this.temp.enter('hello')
    this.temp.enter('how are u')
    this.state = {array: this.temp.store}
    this.keypress = this.keypress.bind(this)
  }
  handleChange(obj, text){
    obj.value = text
  }
  keypress(event, obj=null){
    if(event.key === 'Enter'){
      event.preventDefault()
      this.temp.enter(`${Math.random()}`, obj)
    } else if (event.key === 'Shift'){
      event.preventDefault()
      console.log(event.key)
      this.temp.tab(obj)
      console.log(this.temp.display())
    } else if (event.key === 'Alt'){
      event.preventDefault()
      console.log(event.key)
      this.temp.untab(obj)
      console.log(this.temp.display())
    }  
    this.forceUpdate();
  }
  render() {
    return (
      <div className="App" >
        {this.state.array.map((el, index) => {
          return (<Item  key={index} keypress={this.keypress} obj={el} text={el.value} children={el.children}></Item>)
        })}
      </div>
    );
  }
}

export default App;
