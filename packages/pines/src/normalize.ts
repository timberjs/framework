import { Appearance } from '@timberjs/timber'
import FontFamily from './font_family'
import FontSize, { fontSizeMapper } from './font_size'
import Palette from './palette'
import Size from './size'

const fontSizeVariables = [
  Appearance.variable('font-size-xs', fontSizeMapper(Size.ExtraSmall)),
  Appearance.variable('font-size-sm', fontSizeMapper(Size.Small)),
  Appearance.variable('font-size-md', fontSizeMapper(Size.Medium)),
  Appearance.variable('font-size-lg', fontSizeMapper(Size.Large)),
  Appearance.variable('font-size-xl', fontSizeMapper(Size.ExtraLarge)),
]

export const appearance = new Appearance().use(
  ...fontSizeVariables,
  FontFamily.inter,
  FontSize.medium,
  new Appearance('text-rendering', 'geometricprecision'),
  new Appearance('background-color', Palette.amber.variant(300).toString())
)
