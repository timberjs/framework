import { Component } from '@timberjs/dom'
import { Appearance } from '@timberjs/appearance'

export default class Surface extends Component {
  private handler?: () => void

  materialize() {
    this.appearance.use(Appearance.withPropertyAndValue('cursor', 'pointer'))
  }

  click(handler: () => void) {
    if (this.handler) this.element.removeEventListener('click', handler)
    this.element.addEventListener('click', handler)
    return this
  }
}
