import Appearance from './appearance'
import { GlobalStyleValues } from './style'

/**
 * When using content box, the width and the height of the element includes the
 * content of the element. The padding, margin and border is not included.
 */
export type ContentBoxValue = 'content-box'

/**
 * When using border box, the width and the height of the element includes both
 * the content, padding, margin and border. This is the default for all Timber
 * elements.
 *
 * @default
 */
export type BorderBoxValue = 'border-box'

/**
 * Here now.
 */
export type BoxSizingValue =
  | ContentBoxValue
  | BorderBoxValue
  | GlobalStyleValues

export class BoxSizing extends Appearance {
  static contentBox = new BoxSizing('content-box')
  static borderBox = new BoxSizing('border-box')

  constructor(value: BoxSizingValue) {
    super('box-sizing', value)
  }
}
