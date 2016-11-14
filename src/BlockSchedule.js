import React from 'react'
import HourLabels from './HourLabels'
import CourseBlock from './CourseBlock'
import './BlockSchedule.css'

function timesOverlap(time1, time2) {
  return time1.start <= time2.end && time2.start <= time1.end
}

function minuteCssOffset(minute) {
  return (minute * 0.075) + "em"
}

const BlockSchedule = ({courses}) => {
  // Find the earliest and latest hours to render
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

  // First, separate courses by day and by hour in each day
  let weekdays = { M: [], T: [], W: [], R: [], F: [] }
  for (let course of courses) {
    let i = course.days.length
    while (i--) {
      if (typeof weekdays[course.days[i]][course.start.hour] === "undefined") {
        weekdays[course.days[i]][course.start.hour] = [course]
      }
      else {
        weekdays[course.days[i]][course.start.hour].push(course)
      }
    }
  }
  // Finally, create elements based on this structure (basically a 3D array)
  // And be sure to check for and deal with overlapping courses at this stage!
  let weekdayElements = { M: [], T: [], W: [], R: [], F: [] }
  for (let day in weekdays) {
    for (let hour = earliestHour; hour <= latestHour; ++hour) {
      if (typeof weekdays[day][hour] === "undefined") {
        weekdayElements[day][hour] = <div className="hour" key={day + hour}></div>
      }
      else {
        let courseElements = []
        for (let course of weekdays[day][hour]) {
          // TODO: Check all coursesPerDay for overlap and apply special CSS if so
          courseElements.push(
            <CourseBlock
              course={course}
              key={course.crn}
              style={{marginTop: minuteCssOffset(course.start.minute)}}
            />
          )
        }
        weekdayElements[day][hour] = (
          <div className="hour" key={day + hour}>
            {[...courseElements]}
          </div>
        )
      }
    }
  }

  return (
    <div className="BlockSchedule">
      <HourLabels
        earliestHour={earliestHour}
        latestHour={latestHour}
      ></HourLabels>
      <div className="weekday">
        <p className="weekdayLabel">M</p>
        {weekdayElements.M}
      </div>
      <div className="weekday">
        <p className="weekdayLabel">T</p>
        {weekdayElements.T}
      </div>
      <div className="weekday">
        <p className="weekdayLabel">W</p>
        {weekdayElements.W}
      </div>
      <div className="weekday">
        <p className="weekdayLabel">R</p>
        {weekdayElements.R}
      </div>
      <div className="weekday">
        <p className="weekdayLabel">F</p>
        {weekdayElements.F}
      </div>
    </div>
  )
}

export default BlockSchedule
