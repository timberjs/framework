import {
  Appearance,
  Background,
  Border,
  Color,
  Padding,
  Palette,
} from '@timberjs/appearance'
import { Component } from '@timberjs/dom'
import Stack from './stack'

export default class Navbar extends Component {
  private brandComponents: Array<Component> = []

  brand(...components: Array<Component>) {
    this.brandComponents.push(...components)
    return this
  }

  materialize() {
    this.add(new Stack().add(...this.brandComponents))
  }

  get fixed() {
    return this.withAppearance((appearance) =>
      appearance.use(
        new Appearance('position', 'fixed'),
        new Appearance('bottom', 'unset'),
        new Appearance('inset', '0'),
        new Border(
          `1px solid ${Palette.zinc.variant(200).rgba}`,
          'border-bottom'
        ),
        Padding.horizontal(16, 8),
        Background.usingColor(Color.white)
      )
    )
  }
}
