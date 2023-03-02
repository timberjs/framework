import Semaphore from './semaphore'
import Signal from './signal'

export type EffectHandler = () => void

export default class Effect {
  static withHandlerAndSignals(
    handler: EffectHandler,
    ...signals: Array<Signal>
  ) {
    return new Effect(new Semaphore(handler, signals))
  }

  constructor(private semaphore: Semaphore) {}
}
