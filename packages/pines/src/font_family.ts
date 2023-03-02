import { Appearance } from '@timberjs/timber'

export default class FontFamily extends Appearance {
  static fonts = [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen-Sans',
    'Ubuntu',
    'Cantarell',
    'Helvetica Neue',
    'sans-serif',
  ]

  static system = new FontFamily(this.fonts.join(','))

  constructor(fontFamily: string) {
    super('font-family', fontFamily)
  }
}
