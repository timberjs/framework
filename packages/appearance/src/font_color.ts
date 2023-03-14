import Appearance from './appearance'
import { useVariable } from './variable'

export default class FontColor extends Appearance {
  static default = new FontColor(useVariable('text-color'))

  constructor(value: string) {
    super('color', value)
  }
}
