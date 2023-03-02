import Component from './component'

export default abstract class Frame {
  fragment: DocumentFragment = new DocumentFragment()
  rootComponent?: Component

  abstract didBootstrap(): void

  withRootComponent(component: Component) {
    component.initialize()
    this.rootComponent = component
  }

  mount(node?: Node) {
    if (!node) return
    this.rootComponent?.willMount()
    this.rootComponent?.mount(this.fragment)
    return node.appendChild(this.fragment)
  }

  mountAtDocument() {
    this.mount(document.body)
  }
}
