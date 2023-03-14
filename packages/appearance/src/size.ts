enum Size {
  ExtraLarge9 = '9xl',
  ExtraLarge8 = '8xl',
  ExtraLarge7 = '7xl',
  ExtraLarge6 = '6xl',
  ExtraLarge5 = '5xl',
  ExtraLarge4 = '4xl',
  ExtraLarge3 = '3xl',
  ExtraLarge2 = '2xl',
  ExtraLarge = 'xl',
  ExtraSmall = 'xs',
  Large = 'lg',
  Medium = 'md',
  Normal = 'nm',
  Small = 'sm',
}

export default Size

export type SizeMapper = (size: Size) => string
