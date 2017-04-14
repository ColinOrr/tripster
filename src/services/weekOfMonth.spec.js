import weekOfMonth from './weekOfMonth'

it("returns 1 for days in the first week of the month", () => {
  expect(weekOfMonth(new Date(2017, 0, 1))).toEqual(1)
})

it("returns 2 for days in the second week of the month", () => {
  expect(weekOfMonth(new Date(2017, 0, 2))).toEqual(2)
  expect(weekOfMonth(new Date(2017, 0, 8))).toEqual(2)
})

it("returns 3 for days in the third week of the month", () => {
  expect(weekOfMonth(new Date(2017, 0, 9))).toEqual(3)
  expect(weekOfMonth(new Date(2017, 0, 15))).toEqual(3)
})

it("returns 4 for days in the fourth week of the month", () => {
  expect(weekOfMonth(new Date(2017, 0, 16))).toEqual(4)
  expect(weekOfMonth(new Date(2017, 0, 22))).toEqual(4)
})

it("returns 5 for days in the fifth week of the month", () => {
  expect(weekOfMonth(new Date(2017, 0, 23))).toEqual(5)
  expect(weekOfMonth(new Date(2017, 0, 29))).toEqual(5)
})

it("returns 6 for days in the sixth week of the month", () => {
  expect(weekOfMonth(new Date(2017, 0, 30))).toEqual(6)
  expect(weekOfMonth(new Date(2017, 0, 31))).toEqual(6)
})
