import { Component } from '@timberjs/timber'

export default class Text extends Component {
  constructor(value?: string) {
    super('span')
    this.element.innerText = value!
  }

  setValue(value: string) {
    this.element.innerText = value
  }
}
