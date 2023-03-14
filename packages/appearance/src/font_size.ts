import Appearance from './appearance'
import Size, { SizeMapper } from './size'
import { useVariable } from './variable'

export default class FontSize extends Appearance {
  static extraSmall = new FontSize(Size.ExtraSmall)
  static small = new FontSize(Size.Small)
  static medium = new FontSize(Size.Medium)
  static large = new FontSize(Size.Large)
  static extraLarge = new FontSize(Size.ExtraLarge)
  static extraLarge2 = new FontSize(Size.ExtraLarge2)
  static extraLarge3 = new FontSize(Size.ExtraLarge3)
  static extraLarge4 = new FontSize(Size.ExtraLarge4)
  static extraLarge5 = new FontSize(Size.ExtraLarge5)
  static extraLarge6 = new FontSize(Size.ExtraLarge6)
  static extraLarge7 = new FontSize(Size.ExtraLarge7)
  static extraLarge8 = new FontSize(Size.ExtraLarge8)
  static extraLarge9 = new FontSize(Size.ExtraLarge9)

  constructor(size: Size) {
    super()
    this.use(
      new Appearance('font-size', useVariable(`font-size-${size}`)),
      new Appearance('line-height', useVariable(`line-height-${size}`))
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
      case Size.ExtraLarge4:
        return 36
      case Size.ExtraLarge5:
        return 48
      case Size.ExtraLarge6:
        return 609
      case Size.ExtraLarge7:
        return 72
      case Size.ExtraLarge8:
        return 96
      case Size.ExtraLarge9:
        return 128
      default:
        return 0
    }
  })().toString()}px`
}
