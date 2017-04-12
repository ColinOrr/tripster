import { dateRange, monthRange } from './range.js'

describe('dateRange', () => {

  it('returns all the dates between two dates inclusive', () => {
    const result = dateRange(new Date(2001, 0, 30), new Date(2001, 1, 2))
    expect(result).toEqual([
      new Date(2001, 0, 30),
      new Date(2001, 0, 31),
      new Date(2001, 1,  1),
      new Date(2001, 1,  2),
    ])
  })

  it('ignores the time component', () => {
    const result = dateRange(new Date(2001, 0, 1), new Date(2001, 0, 1, 13, 0, 0))
    expect(result).toEqual([
      new Date(2001, 0, 1),
    ])
  })

})

describe('monthRange', () => {

  it('returns the months between two dates', () => {
    const result = monthRange(new Date(2001, 0, 1), new Date(2001, 2, 1))
    expect(result).toEqual([
      new Date(2001, 0, 1),
      new Date(2001, 1, 1),
      new Date(2001, 2, 1),
    ])
  })

  it('always returns the first day of each month in the range', () => {
    const result = monthRange(new Date(2001, 0, 31), new Date(2001, 1, 1))
    expect(result).toEqual([
      new Date(2001, 0, 1),
      new Date(2001, 1, 1),
    ])
  })

  it('returns one month if the dates start and end in the same month', () => {
    const result = monthRange(new Date(2001, 0, 1), new Date(2001, 0, 2))
    expect(result).toEqual([
      new Date(2001, 0, 1),
    ])
  })

})
