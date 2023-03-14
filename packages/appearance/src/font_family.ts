import Appearance from './appearance'

export default class FontFamily extends Appearance {
  static systemFonts = [
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

  static inter = new FontFamily('"Inter var", sans-serif')

  static system = new FontFamily(this.systemFonts.join(','))

  constructor(fontFamily: string, variableFontFamily?: string) {
    super()
    this.use(new Appearance('font-family', fontFamily))
  }
}
