import { Appearance, Component } from '@timberjs/timber'

export default class Surface extends Component {
  private handler?: () => void

  initialize() {
    this.appearance.use(Appearance.withPropertyAndValue('cursor', 'pointer'))
  }

  click(handler: () => void) {
    if (this.handler) this.element.removeEventListener('click', handler)
    this.element.addEventListener('click', handler)
    return this
  }
}
