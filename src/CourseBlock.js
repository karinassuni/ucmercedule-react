import React from 'react'
import {to12HourStringNoMeridiem as timeToStringNoMeridiem, militaryTime} from './util/Time'
import './CourseBlock.css'

const CourseBlock = ({course, style}) => {
  let start = course.start
  let end = course.end
  let height = ((militaryTime(end) - militaryTime(start)) / 25.5) + "em"
  return (
    <div className="CourseBlock" style={{...style, height}}>
      <p className="name">{course.name}</p>
      <p className="time">
        {timeToStringNoMeridiem(start)} - {timeToStringNoMeridiem(end)}
      </p>
    </div>
  )
}

export default CourseBlock
