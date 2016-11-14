import React from 'react'
import {to12HourStringNoMeridiem as timeToStringNoMeridiem, militaryTime} from './util/Time'
import './CourseBlock.css'

const CourseBlock = ({course}) => {
  let start = course.start
  let end = course.end
  return (
    <div className="CourseBlock">
      <p className="name">{course.name}</p>
      <p className="time">
        {timeToStringNoMeridiem(start)} - {timeToStringNoMeridiem(end)}
      </p>
    </div>
  )
}

export default CourseBlock
