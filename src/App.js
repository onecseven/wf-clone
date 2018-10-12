import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/listicle.js'
import Item from './components/Item.js'
import listitem from './components/listicle.js';

class App extends Component {
  constructor(){
    super();
    this.state = {array: [new listitem('hello'), new listitem('how are u')]}
    this.keypress = this.keypress.bind(this)
  }
  keypress(event){
    console.log(event.key)
    if(event.key === 'Enter'){
      let t = this.state.array.slice()
      t.push(new listitem('enter'))
      this.setState({array: t})
    }  
  }
  render() {
    return (
      <div className="App" >
        {this.state.array.map((el, index) => {
          return (<Item  key={index} keypress={this.keypress} text={el.value} children={el.children}></Item>)
        })}
      </div>
    );
  }
}

export default App;
