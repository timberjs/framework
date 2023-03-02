import { Appearance, debug } from '@timberjs/timber'

export default class Border extends Appearance {
  static transparent = new Border('border', '1px solid transparent')
}
