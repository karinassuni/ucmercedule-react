import React from 'react'
import CourseBlock from './CourseBlock'
import './Weekday.css'

function minuteCssOffset(minute) {
  return (4.125/60 * minute) + "em"
}

function timesOverlap(time1, time2) {
  return time1.start <= time2.end && time2.start <= time1.end
}

const Weekday = ({day, coursesPerHour, earliestHour, latestHour}) => {
  let hourElements = []
  for (let i = earliestHour; i <= latestHour; ++i) {
    if (coursesPerHour[i] === undefined) {
      // Create an empty hour element
      hourElements[i] = <div className="hour" key={i}></div>
    }
    else {
      // Create an hour element filled with courses during that hour
      let courseElements = []
      for (let course of coursesPerHour[i]) {
        // TODO: Check all coursesPerDay for overlap and apply special CSS if so
        courseElements.push(
          <CourseBlock
          course={course}
          key={course.crn}
          style={{marginTop: minuteCssOffset(course.start.minute)}}
          />
        )
      }
      hourElements[i] = (
        <div className="hour" key={i}>
        {[...courseElements]}
        </div>
      )
    }
  }

  return (
    <div className="Weekday">
      <p className="weekdayLabel">{day}</p>
      {[...hourElements]}
    </div>
  )
}

export default Weekday
