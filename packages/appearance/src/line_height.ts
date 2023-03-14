import Size, { SizeMapper } from './size'

export const lineHeightMapper: SizeMapper = (size: Size) => {
  const lineHeight = (() => {
    switch (size) {
      case Size.ExtraSmall:
        return 16
      case Size.Small:
        return 20
      case Size.Medium:
        return 24
      case Size.Large:
        return 28
      case Size.ExtraLarge:
        return 28
      case Size.ExtraLarge2:
        return 32
      case Size.ExtraLarge3:
        return 36
      case Size.ExtraLarge4:
        return 40
      default:
        return
    }
  })()

  return lineHeight ? `${lineHeight}px` : '1'
}
