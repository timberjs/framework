import Appearance from './appearance'
import Color from './color'
import FontColor from './font_color'
import FontFamily from './font_family'
import FontSize, { fontSizeMapper } from './font_size'
import Height from './height'
import { lineHeightMapper } from './line_height'
import Margin from './margin'
import Size from './size'

const defaultColorsVariables = [
  Appearance.variable('text-color', Color.black.rgba),
]

const fontSizeVariables = [
  Appearance.variable('font-size-xs', fontSizeMapper(Size.ExtraSmall)),
  Appearance.variable('font-size-sm', fontSizeMapper(Size.Small)),
  Appearance.variable('font-size-md', fontSizeMapper(Size.Medium)),
  Appearance.variable('font-size-lg', fontSizeMapper(Size.Large)),
  Appearance.variable('font-size-xl', fontSizeMapper(Size.ExtraLarge)),
  Appearance.variable('font-size-2xl', fontSizeMapper(Size.ExtraLarge2)),
  Appearance.variable('font-size-3xl', fontSizeMapper(Size.ExtraLarge3)),
  Appearance.variable('font-size-4xl', fontSizeMapper(Size.ExtraLarge4)),
  Appearance.variable('font-size-5xl', fontSizeMapper(Size.ExtraLarge5)),
  Appearance.variable('font-size-6xl', fontSizeMapper(Size.ExtraLarge6)),
  Appearance.variable('font-size-7xl', fontSizeMapper(Size.ExtraLarge7)),
  Appearance.variable('font-size-8xl', fontSizeMapper(Size.ExtraLarge8)),
  Appearance.variable('font-size-9xl', fontSizeMapper(Size.ExtraLarge9)),
]

const lineHeightVariables = [
  Appearance.variable('line-height-xs', lineHeightMapper(Size.ExtraSmall)),
  Appearance.variable('line-height-sm', lineHeightMapper(Size.Small)),
  Appearance.variable('line-height-md', lineHeightMapper(Size.Medium)),
  Appearance.variable('line-height-lg', lineHeightMapper(Size.Large)),
  Appearance.variable('line-height-xl', lineHeightMapper(Size.ExtraLarge)),
  Appearance.variable('line-height-2xl', lineHeightMapper(Size.ExtraLarge2)),
  Appearance.variable('line-height-3xl', lineHeightMapper(Size.ExtraLarge3)),
  Appearance.variable('line-height-4xl', lineHeightMapper(Size.ExtraLarge4)),
  Appearance.variable('line-height-5xl', lineHeightMapper(Size.ExtraLarge5)),
  Appearance.variable('line-height-6xl', lineHeightMapper(Size.ExtraLarge6)),
  Appearance.variable('line-height-7xl', lineHeightMapper(Size.ExtraLarge7)),
  Appearance.variable('line-height-8xl', lineHeightMapper(Size.ExtraLarge8)),
  Appearance.variable('line-height-9xl', lineHeightMapper(Size.ExtraLarge9)),
]

export const htmlAppearance = new Appearance().use(Height.full)

export const bodyAppearance = new Appearance().use(
  ...defaultColorsVariables,
  ...fontSizeVariables,
  ...lineHeightVariables,
  Height.full,
  FontFamily.inter,
  FontSize.medium,
  FontColor.default,
  Margin.zero,
  new Appearance('text-rendering', 'geometricprecision')
)
