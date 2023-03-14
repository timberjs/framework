import Appearance from './appearance'
import { Key } from './options'
import Size from './size'

type WithSizeParameter =
  | Exclude<Size, Size.ExtraSmall | Size.Small | Size.Normal>
  | Key

export default class Rounded extends Appearance {
  static none = Rounded.withSize(Key.None)
  static medium = Rounded.withSize(Size.Medium)
  static large = Rounded.withSize(Size.Large)
  static x2 = Rounded.withSize(Size.ExtraLarge)
  static xl2 = Rounded.withSize(Size.ExtraLarge2)
  static xl3 = Rounded.withSize(Size.ExtraLarge3)
  static full = Rounded.withSize(Key.Full)

  static withSize(size: WithSizeParameter) {
    switch (size) {
      default:
      case Key.None:
        return new Rounded('border-radius', 'unset')
      case Key.Full:
        return new Rounded('border-radius', '9999px')
      case Size.Medium:
        return new Rounded('border-radius', '6px')
      case Size.Large:
        return new Rounded('border-radius', '8px')
      case Size.ExtraLarge:
        return new Rounded('border-radius', '12px')
      case Size.ExtraLarge2:
        return new Rounded('border-radius', '16px')
      case Size.ExtraLarge3:
        return new Rounded('border-radius', '24px')
    }
  }
}
