import { EffectHandler } from './effect'
import { debug } from './log'
import Signal from './signal'

export type SemaphoreHandler = () => void

export default class Semaphore {
  private timer?: number

  constructor(private handler: SemaphoreHandler, signals: Array<Signal>) {
    signals.forEach((signal) => this.watch(signal))
  }

  watch(signal: Signal) {
    signal.connect(this)
  }

  notify() {
    debug('notify', 'semaphore')
    if (this.timer) clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      requestAnimationFrame(() => this.handler())
      delete this.timer
    }, 32)
  }
}
