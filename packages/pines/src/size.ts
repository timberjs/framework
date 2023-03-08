enum Size {
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
