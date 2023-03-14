import { bootstrap, Frame } from '@timberjs/dom'
import { bodyAppearance, htmlAppearance } from '@timberjs/appearance'
import App from './nodes/app'

bootstrap(
  new (class extends Frame {
    didBootstrap() {
      this.withRootComponent(new App())
    }
  })()
)
