import * as Time from './Time'

it("converts 24-hour clock Numbers to 12-hour Objects with meridiems", () => {
  expect(Time.hour24ToHour12(15)).toEqual({hour: "3", meridiem: "PM"})
  expect(Time.hour24ToHour12(0)).toEqual({hour: "12", meridiem: "AM"})
  expect(Time.hour24ToHour12(12)).toEqual({hour: "12", meridiem: "PM"})
})

it("converts clock-minute Numbers to Strings", () => {
  expect(Time.minutesToString(45)).toEqual("45")
  expect(Time.minutesToString(30)).toEqual("30")
  expect(Time.minutesToString(0)).toEqual("00")
})

it("converts 24-hour time Objects to military-time Numbers", () => {
  expect(Time.militaryTime({hour: 11, minute: 15})).toEqual(1115)
  expect(Time.militaryTime({hour: 13, minute: 30})).toEqual(1330)
  expect(Time.militaryTime({hour: 23, minute: 0})).toEqual(2300)
})
