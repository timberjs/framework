import Semaphore from './semaphore'
import { debug } from './log'
import { createShortMarker } from './primitives'

export default class Signal<T = unknown> {
  private id: string
  private semaphores: Array<Semaphore> = []

  static from<T>(value: T) {
    return new Signal(value)
  }

  constructor(private value: T) {
    this.id = createShortMarker()
  }

  set(value: T) {
    debug('set', 'signal', this.id)
    this.value = value
    this.semaphores.forEach((semaphore) => semaphore.notify())
  }

  get() {
    return this.value
  }

  connect(semaphore: Semaphore) {
    this.semaphores.push(semaphore)
  }
}
