import { debug, short } from '@timberjs/support'
import Semaphore from './semaphore'

export default class Signal<T = unknown> {
  private id = short()
  private semaphores: Array<Semaphore> = []

  static from<T>(value: T) {
    return new Signal(value)
  }

  constructor(private value: T) {}

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
