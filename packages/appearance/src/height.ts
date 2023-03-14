import Appearance from './appearance'
import { Unit, unitMapper } from './unit'

export default class Height extends Appearance {
  static full = new Height(100, Unit.Percent)

  constructor(value: number, unit: Unit) {
    super('height', `${value.toString()}${unitMapper(unit)}`)
  }
}
