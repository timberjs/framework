import { Appearance } from '@timberjs/timber'

export const smallPadding = Appearance.withPropertyAndValue('padding', '4px')

export const smallButtonPadding = new Appearance().use(
  Appearance.withPropertyAndValue('padding-top', '4px'),
  Appearance.withPropertyAndValue('padding-bottom', '4px'),
  Appearance.withPropertyAndValue('padding-left', '8px'),
  Appearance.withPropertyAndValue('padding-right', '8px')
)
