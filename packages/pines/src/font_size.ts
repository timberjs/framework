import { Appearance } from '@timberjs/timber'
import Size, { SizeMapper } from './size'
import { useVariable } from './variable'

export default class FontSize extends Appearance {
  static extraSmall = new FontSize(Size.ExtraSmall)
  static small = new FontSize(Size.Small)
  static medium = new FontSize(Size.Medium)
  static large = new FontSize(Size.Large)
  static extraLarge = new FontSize(Size.ExtraLarge)

  constructor(size: Size, lineHeight?: number) {
    super()
    this.use(
      new Appearance('font-size', useVariable(`font-size-${size}`)),
      new Appearance('line-height', '18px')
    )
  }
}

export const fontSizeMapper: SizeMapper = (size: Size) => {
  return `${(() => {
    switch (size) {
      case Size.ExtraSmall:
        return 12
      case Size.Small:
        return 14
      case Size.Medium:
        return 16
      case Size.Large:
        return 18
      case Size.ExtraLarge:
        return 20
      case Size.ExtraLarge2:
        return 24
      case Size.ExtraLarge3:
        return 30
      default:
        return 0
    }
  })().toString()}px`
}
