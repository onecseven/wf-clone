Array.prototype.last = function () {
  return this[this.length-1]
}

export default class listitem {
  constructor(text, parent=null, children=[]){
    this.value = text
    this.children = children
    this.parent = parent || this
  }
  addChild(child, subchildren=[]){
    this.children.push(new listitem(child, this, subchildren))
    return this.children[this.children.length - 1]
    }
}

class list{
  constructor(){
    this.store = []
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
  tab(){
  }
  untab(item){
    let temp = item.parent.parent.addChild(item.value, item.children)
    return item.parent.parent.children.last()
  }
  delete(){
  }
}