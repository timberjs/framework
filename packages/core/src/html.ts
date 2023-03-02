import Component from './component'

export default class HTMLComponent extends Component {
  static withDocumentFragment(fragment: DocumentFragment) {
    const component = new HTMLComponent()
    component.element.appendChild(fragment)
    return component
  }
}

export function html(value: TemplateStringsArray) {
  const fragment = new DocumentFragment()
  fragment.textContent = value.join('')

  return HTMLComponent.withDocumentFragment(fragment)
}
