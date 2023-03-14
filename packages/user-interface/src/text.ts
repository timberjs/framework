import { Appearance, FontWeight } from '@timberjs/appearance'
import { Component } from '@timberjs/dom'

export default class Text extends Component {
  constructor(element: string = 'span', value?: string) {
    super(element)
    if (value) this.setValue(value)
  }

  setValue(value: string) {
    this.element.innerText = value
  }

  get thin() {
    return this.withAppearance((appearance) => appearance.use(FontWeight.thin))
  }

  get extraLight() {
    return this.withAppearance((appearance) =>
      appearance.use(FontWeight.extraLight)
    )
  }

  get light() {
    return this.withAppearance((appearance) => appearance.use(FontWeight.light))
  }

  get normal() {
    return this.withAppearance((appearance) =>
      appearance.use(FontWeight.normal)
    )
  }

  get medium() {
    return this.withAppearance((appearance) =>
      appearance.use(FontWeight.medium)
    )
  }

  get semibold() {
    return this.withAppearance((appearance) =>
      appearance.use(FontWeight.semibold)
    )
  }

  get bold() {
    return this.withAppearance((appearance) => appearance.use(FontWeight.bold))
  }

  get extraBold() {
    return this.withAppearance((appearance) =>
      appearance.use(FontWeight.extraBold)
    )
  }

  get black() {
    return this.withAppearance((appearance) => appearance.use(FontWeight.black))
  }

  get ultraBlock() {
    return this.withAppearance((appearance) =>
      appearance.use(FontWeight.ultraBlock)
    )
  }
}
