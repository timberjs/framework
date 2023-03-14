import { FontSize, FontWeight, Margin } from '@timberjs/appearance'
import Text from './text'

export default class Heading extends Text {
  static withText(text: string) {
    return Heading.withTextAndOrderAndSize(text)
  }

  static withTextAndOrderAndSize(
    text: string,
    order = 1,
    fontSize = FontSize.extraLarge5
  ) {
    const heading = new Heading(order, text)
    heading.appearance.use(fontSize, Margin.zero)
    return heading
  }

  constructor(order: number, text: string) {
    if (order < 1) throw new Error()
    if (order > 6) throw new Error()
    super(`h${order}`, text)
    this.appearance.use(FontWeight.normal)
  }
}
