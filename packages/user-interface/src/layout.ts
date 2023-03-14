import { Display, FlexDirection } from '@timberjs/appearance'
import { Component } from '@timberjs/dom'

export default class Layout extends Component {
  static withComponents(...components: Array<Component>) {
    const layout = new Layout()
    layout.addComponent(...components)
    return layout
  }

  constructor() {
    super()
    this.useAppearance(Display.flex, FlexDirection.vertical)
  }
}
