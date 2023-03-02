import { createShortMarker } from './primitives'

export default class Appearance {
  private id: string
  private styleSheet = new CSSStyleSheet()
  private components: Array<Appearance> = []
  private content?: string

  static withPropertyAndValue(property: string, value: string) {
    return new Appearance(property, value)
  }

  static fromString(value: string) {
    const appearance = new Appearance()
    appearance.content = value
    return appearance
  }

  constructor(private property?: string, private value?: string) {
    this.id = createShortMarker()
    document.adoptedStyleSheets.push(this.styleSheet)
  }

  use(...appearances: Array<Appearance>) {
    this.components.push(...appearances)
    return this
  }

  apply(element: HTMLElement) {
    const q: Array<Appearance> = [this]
    const declarations = []

    let appearance: Appearance | undefined
    while ((appearance = q.pop())) {
      q.push(...appearance.components)
      declarations.push(appearance.content ?? appearance.toString())
    }

    const content = declarations.filter(Boolean).join('')

    if (!content) return

    crypto.subtle
      .digest('SHA-1', new TextEncoder().encode(content))
      .then((buffer) =>
        Array.from(new Uint8Array(buffer.slice(0, 4)))
          .map((value) => value.toString(16).padStart(2, '0'))
          .join('')
      )
      .then((hash) => `a-${this.id}-${hash}`)
      .then((className) =>
        this.styleSheet
          .replace(`.${className}{${content}}`)
          .then(() => element.classList.add(className))
      )
  }

  toString() {
    if (!this.property) return
    return `${this.property}: ${this.value};`
  }
}

export function appearance(value: TemplateStringsArray) {
  return Appearance.fromString(value.join(''))
}
