import {
  htmlAppearance as preflightHtmlApperance,
  bodyAppearance as preflightBodyApperance,
} from '@timberjs/appearance'
import Frame from './frame'

export function bootstrap(
  frame: Frame,
  htmlAppearance = preflightHtmlApperance,
  bodyAppearance = preflightBodyApperance,
  node?: Node
) {
  htmlAppearance?.apply(document.documentElement)
  bodyAppearance?.apply(document.body)
  frame.didBootstrap()
  mountAtNodeOrDocument(frame, node)
}

function mountAtNodeOrDocument(frame: Frame, node?: Node) {
  frame.mount(node) ?? frame.mountAtDocument()
}
