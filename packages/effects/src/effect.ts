import { EffectHandler } from './handler'
import { Signal, Semaphore } from '@timberjs/signals'

export default class Effect {
  static withHandlerAndSignals(
    handler: EffectHandler,
    ...signals: Array<Signal>
  ) {
    return new Effect(new Semaphore(handler, signals))
  }

  constructor(private semaphore: Semaphore) {}
}
