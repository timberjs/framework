import Appearance from './appearance'

type BorderProperty =
  | 'border'
  | 'border-left'
  | 'border-top'
  | 'border-right'
  | 'border-bottom'

export default class Border extends Appearance {
  static transparent = new Border('1px solid transparent')

  constructor(value: string, property: BorderProperty = 'border') {
    super(property, value)
  }
}
