Array.prototype.last = function () {
  return this[this.length-1]
}

var checkArrays = function (arr1, arr2){
  var nested = function(item){
    if (Array.isArray(item)){
      return true;
    }
    return false;
  }
  if (!Array.isArray(arr1) || !Array.isArray(arr2)){
    return false;
  }
  if (arr1.length !== arr2.length){
    return false;
  }
  if (arr1.every(nested) && arr2.every(nested)){ //nested case
    for (var q = 0; q < arr1.length; q++){
      if(!checkArrays(arr1[q], arr2[q])){ //recursion at one level of recursion
        return false;
      }
    }
  } else {  //not nested case
      for (var i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]){
            return false;
          }
      }
  }
  return true;
}

export default class listitem {
  constructor(text, parent=null, children=[]){
    this.value = text
    this.children = children
    this.parent = parent || null
  }
  addChild(child, subchildren=[]){
    this.children.push(new listitem(child, this, subchildren))
    return this.children.last()
    }
  equals(item){
    if (item.value !== this.value){
      return false
    } else if (!checkArrays(item.children, this.children)){
      return false
    } else {
      return true
    }
  }
}

class list{
  constructor(){
    this.store = []
  }
  originArray(item){
  //returns the array in which it is, and its index
  let det = (item, store) => {
    for (let i = 0; i < store.length; i++) {
      const el = store[i]
      if (el.equals(item)){
        return [store, i]
        }
      if (el.children.length > 0){
        if (det(item, el.children)){
          return det(item, el.children)
          } 
        }
      }
    return false;
    }
    return det(item, this.store)
  }
  enter(text, parent=null){
    //returns what you enter so you can save it
    if (!parent) {
      this.store.push(new listitem(text))
      return this.store.last();
    }else if (parent) {
      return parent.addChild(text)
    }
  }
  tab(item){
    if (this.originArray(item)){
      var origin = this.originArray(item)[0]
      var index = this.originArray(item)[1]
    } else {
      throw new Error('problem tabbing')
    }
    if (index > 0){
      let temp = item
      this.delete(item)
      origin[index-1].addChild(temp.value, temp.children)
    }
  }
  untab(item){
    let temp = item
    if (!temp.parent.parent){
      if (this.originArray(temp.parent)){
        var origin = this.originArray(temp.parent)[0]
        origin.push(new listitem(temp.value, null, temp.children))
      } else if (temp.parent === null) {
        return
      }
    } else {
      this.parent.parent.addChild(temp.value, temp.children)
    }
    this.delete(item)
  }
  delete(item){
    if (this.originArray(item)){
      var origin = this.originArray(item)[0]
      var index = this.originArray(item)[1]
    } else {
      throw new Error('wwo')
    }
    origin.splice(index,1)
    return
  }
  display(){
    let turn = (item) => {
      var temp = []      
      if (item.children && item.children.length > 0){
        item.children.forEach(el => {
          temp.push(turn(el))
        });
      }
      return [item.value, temp]
    }
    return JSON.stringify(this.store.map(el => {
      return turn(el)
    }),null, 2)
  }
}

let ls = new list()
let one = ls.enter('hi')
let two = ls.enter('sarah', one)
let twoo = ls.enter('sarah2', one)
let three = ls.enter('natalia')
let four = ls.enter('star', three)
let five = ls.enter('wow', four)
ls.display() //?
ls.untab(four)
ls.display() //?

//tab -> move to .parent.children[i-1].children
