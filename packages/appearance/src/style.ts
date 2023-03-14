import { createShortMarker } from './primitives'

export type GlobalStyleValues =
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset'

export default class Style {
  private id = createShortMarker()
  private styleSheet = new CSSStyleSheet()
  private components: Array<Style> = []
  private tags: Array<string> = []
  private content?: string

  static variable(name: string, value: string) {
    return new Style(`--timber-${name}`, value)
  }

  static withPropertyAndValue(property: string, value: string) {
    return new Style(property, value)
  }

  static fromString(value: string) {
    const appearance = new Style()
    appearance.content = value
    return appearance
  }

  constructor(private property?: string, private value?: string) {
    document.adoptedStyleSheets.push(this.styleSheet)
  }

  use(...appearances: Array<Style>) {
    this.components.push(...appearances)
    return this
  }

  apply(element: HTMLElement) {
    const q: Array<Style> = [this]
    const declarations = []

    let appearance: Style | undefined
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
      .then((hash) => `timber-${this.id}-${hash}`)
      .then((className) =>
        Promise.resolve([`.${className}`, ...this.tags].join(',')).then(
          (selectors) =>
            this.styleSheet
              .replace(`${selectors}{${content}}`)
              .then(() => element.classList.add(className))
        )
      )
  }

  toString() {
    if (!this.property) return
    return `${this.property}: ${this.value};`
  }
}

export function appearance(value: TemplateStringsArray) {
  return Style.fromString(value.join(''))
}
