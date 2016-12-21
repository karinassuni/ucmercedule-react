/**
 * Time objects used by this library are expected to be in 24-hour format
 */

export function hour24ToHour12(hour) {
  let meridiem = hour < 12 ? 'AM' : 'PM'
  let hourStr = '' + (hour % 12)
  if (hourStr === '0') {
    hourStr = '12'
  }
  return {hour: hourStr, meridiem}
}

export function minutesToString(minutes) {
  let tenthMinute = '' + Math.floor(minutes / 10)
  let onethMinute = '' + (minutes % 10)
  return tenthMinute + onethMinute
}

export function to12HourString(time) {
  let hour12 = hour24ToHour12(time.hour)
  return hour12.hour + ':' + minutesToString(time.minute) + hour12.meridiem
}

export function to12HourStringNoMeridiem(time) {
  let hour12 = hour24ToHour12(time.hour)
  return hour12.hour + ':' + minutesToString(time.minute)
}

export function militaryTime(time) {
  return (time.hour * 100 + time.minute)
}
