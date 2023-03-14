import Appearance from './appearance'

export default class Constraint extends Appearance {
  get alignCenter() {
    this.use(new Appearance('align-self', 'center'))
    return this
  }

  get justifyCenter() {
    this.use(new Appearance('justify-self', 'center'))
    return this
  }

  growUsingFactor(factor = 1) {
    this.use(new Appearance('flex-grow', factor.toString()))
    return this
  }

  get grow() {
    return this.growUsingFactor()
  }

  get fullHeight() {
    this.use(new Appearance('height', '100%'))
    return this
  }
}
