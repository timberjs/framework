export enum Unit {
  Pixel = 'px',
  Percent = '%',
}

export type UnitMapper = (unit: Unit) => string

export const unitMapper: UnitMapper = (unit: Unit) => {
  return (() => {
    switch (unit) {
      case Unit.Pixel:
        return 'px'
      case Unit.Percent:
        return '%'
    }
  })()
}
