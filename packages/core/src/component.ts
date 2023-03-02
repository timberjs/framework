import Appearance from './appearance'
import Effect, { EffectHandler } from './effect'
import Signal from './signal'

export default abstract class Component {
  private components: Array<Component> = []
  private effects: Array<Effect> = []

  appearance: Appearance = new Appearance()
  element: HTMLElement

  constructor(element = 'div') {
    this.element = document.createElement(element)
  }

  initialize(): void {}

  willMount(): void {}

  mount(parentNode: Node) {
    for (const component of this.components) component.mount(this.element)
    this.appearance.apply(this.element)
    parentNode.appendChild(this.element)
  }

  add(...components: Array<Component>) {
    components.forEach((component) => component.initialize())
    this.components.push(...components)
    return this
  }

  effect(handler: EffectHandler, ...signals: Array<Signal>) {
    this.effects.push(Effect.withHandlerAndSignals(handler, ...signals))
    return this
  }
}
