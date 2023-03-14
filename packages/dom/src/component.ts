import { Appearance, BoxSizing, Constraint } from '@timberjs/appearance'
import { Effect, EffectHandler } from '@timberjs/effects'
import { Signal } from '@timberjs/signals'

export default abstract class Component {
  private components: Array<Component> = []
  private effects: Array<Effect> = []

  appearance: Appearance = new Appearance()
  constraint = new Constraint()
  element: HTMLElement

  constructor(element = 'div', ...appearances: Array<Appearance>) {
    this.element = document.createElement(element)
    this.useAppearance(BoxSizing.borderBox, ...appearances)
  }

  materialize(): void {}

  willMount(): void {}

  mount(parentNode: Node) {
    for (const component of this.components) component.mount(this.element)
    this.appearance.apply(this.element)
    this.constraint.apply(this.element)
    parentNode.appendChild(this.element)
  }

  add(...components: Array<Component>) {
    components.forEach((component) => component.materialize())
    this.components.push(...components)
    return this
  }

  effect(handler: EffectHandler, ...signals: Array<Signal>) {
    this.effects.push(Effect.withHandlerAndSignals(handler, ...signals))
    return this
  }

  addComponent(...components: Array<Component>) {
    components.forEach((component) => component.materialize())
    this.components.push(...components)
    return this
  }

  useAppearance(...appearances: Array<Appearance>) {
    this.appearance.use(...appearances)
    return this
  }

  withAppearance(closure: (appearance: Appearance) => void) {
    closure(this.appearance)
    return this
  }

  withConstraint(closure: (constraint: Constraint) => void) {
    closure(this.constraint)
    return this
  }
}
