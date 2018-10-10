export default class listitem {
  constructor(text){
    this.value = text
    this.children = []
  }
  addChild(child){
    this.children.push(new listitem(child))
    }
  flatten(){
    return [this.value, this.children.map(el => {
      return el.flatten()
    })]
  }
}

