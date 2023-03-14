import Appearance from './appearance'

type FlexDirectionValue = 'column' | 'row'

export class FlexDirection extends Appearance {
  static vertical = new FlexDirection('column')
  static horizontal = new FlexDirection()

  constructor(direction: FlexDirectionValue = 'row') {
    super('flex-direction', direction)
  }
}
