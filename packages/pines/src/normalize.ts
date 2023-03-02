import { Appearance } from '@timberjs/timber'
import Background from './background'
import Color from './color'

export const appearance = new Appearance().use(
  Background.asGradient(new Color(139, 198, 158), new Color(192, 231, 155))
)
