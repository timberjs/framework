import { appearance } from '@timber/pines'
import { bootstrap, Frame } from '@timberjs/timber'
import App from './nodes/app'

bootstrap(
  new (class extends Frame {
    didBootstrap() {
      this.withRootComponent(new App())
    }
  })(),
  appearance
)
