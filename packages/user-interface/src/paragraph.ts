import { Margin } from '@timberjs/appearance'
import Text from './text'

export default class Paragraph extends Text {
  static usingText(text: string) {
    return new Paragraph(text)
  }

  constructor(text: string) {
    super('p')
    this.setValue(text)
    this.useAppearance(Margin.zero)
  }
}
