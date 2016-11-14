import React from 'react'
import HourLabels from './HourLabels'
import Weekday from './Weekday'
import SwipeableViews from 'react-swipeable-views'
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

  let weekdayElements = undefined
  if (screen.width >= 450) {
    weekdayElements = Object.keys(weekdays).map((day) => (
      <Weekday
        day={day}
        key={day}
        coursesPerHour={weekdays[day]}
        earliestHour={earliestHour}
        latestHour={latestHour}
        ></Weekday>
    ))
  }
  else {
    weekdayElements = (
      <div>
        <SwipeableViews>
        <div>
          <Weekday
            day="M"
            key="M"
            coursesPerHour={weekdays["M"]}
            earliestHour={earliestHour}
            latestHour={latestHour}
          ></Weekday>
          <Weekday
            day="T"
            key="T"
            coursesPerHour={weekdays["T"]}
            earliestHour={earliestHour}
            latestHour={latestHour}
          ></Weekday>
        </div>
        <div>
          <Weekday
            day="W"
            key="W"
            coursesPerHour={weekdays["W"]}
            earliestHour={earliestHour}
            latestHour={latestHour}
          ></Weekday>
          <Weekday
            day="R"
            key="R"
            coursesPerHour={weekdays["R"]}
            earliestHour={earliestHour}
            latestHour={latestHour}
          ></Weekday>
        </div>
        <div>
          <Weekday
            day="F"
            key="F"
            coursesPerHour={weekdays["F"]}
            earliestHour={earliestHour}
            latestHour={latestHour}
          ></Weekday>
        </div>
        </SwipeableViews>
      </div>
    )
  }

  return (
    <div className="BlockSchedule">
      <HourLabels
        earliestHour={earliestHour}
        latestHour={latestHour}>
      </HourLabels>
      {weekdayElements}
    </div>
  )
}

export default BlockSchedule
