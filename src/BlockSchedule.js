import React from 'react'
import HourLabels from './HourLabels'
import Weekday from './Weekday'
import './BlockSchedule.css'

function getEarliestAndLatestHours(courses) {
  let earliestHour = 24;
  let latestHour = 0;
  for (let course of courses) {
    let currentStartHour = course.start.hour
    let currentEndHour = course.end.hour
    if (currentStartHour < earliestHour) {
      earliestHour = currentStartHour
    }
    if (currentEndHour >= latestHour) {
      latestHour = currentEndHour + 1
    }
  }
  return {earliestHour, latestHour}
}

const BlockSchedule = ({courses}) => {
  let {earliestHour, latestHour} = getEarliestAndLatestHours(courses)

  // Separate courses by day and by hour in each day
  let weekdays = { M: [], T: [], W: [], R: [], F: [] }
  for (let course of courses) {
    let i = course.days.length
    while (i--) {
      if (weekdays[course.days[i]][course.start.hour] === undefined) {
        weekdays[course.days[i]][course.start.hour] = [course]
      }
      else {
        weekdays[course.days[i]][course.start.hour].push(course)
      }
    }
  }

  return (
    <div className="BlockSchedule">
      <HourLabels
        earliestHour={earliestHour}
        latestHour={latestHour}>
      </HourLabels>
      {Object.keys(weekdays).map((day) => (
        <Weekday
          day={day}
          key={day}
          coursesPerHour={weekdays[day]}
          earliestHour={earliestHour}
          latestHour={latestHour}
        ></Weekday>
      ))}
    </div>
  )
}

export default BlockSchedule
