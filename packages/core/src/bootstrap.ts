import Appearance from './appearance'
import Frame from './frame'

export default function bootstrap(
  frame: Frame,
  appearance?: Appearance,
  node?: Node
) {
  appearance?.apply(document.body)
  frame.didBootstrap()
  mountAtNodeOrDocument(frame, node)
}

function mountAtNodeOrDocument(frame: Frame, node?: Node) {
  frame.mount(node) ?? frame.mountAtDocument()
}
