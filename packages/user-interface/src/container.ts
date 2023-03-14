import { Appearance, Display } from '@timberjs/appearance'
import Layout from './layout'

export default class Container extends Layout {
  constructor() {
    super()
    this.appearance.use(
      Display.flex,
      new Appearance('padding', '16px'),
      new Appearance('box-sizing', 'border-box')
    )
  }
}
