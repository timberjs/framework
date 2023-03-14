import Appearance from './appearance'

enum MarginProperty {
  Margin = 'margin',
  MarginTop = 'margin-top',
  MarginRight = 'margin-right',
  MarginBottom = 'margin-bottom',
  MarginLeft = 'margin-left',
}

export default class Margin extends Appearance {
  static zero = Margin.all(0)

  static all(value: number) {
    return new Margin(`${value.toString()}px`)
  }

  constructor(value: string, property = MarginProperty.Margin) {
    super(property.toString(), value)
  }
}
