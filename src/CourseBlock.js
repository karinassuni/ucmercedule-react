import React from 'react'
import {to12HourStringNoMeridiem as timeToStringNoMeridiem, militaryTime} from './util/Time'
import './CourseBlock.css'

const CourseBlock = ({course}) => {
  let start = course.start
  let end = course.end
  return (
  <div className="CourseBlock">
    <p className="CourseBlock-name">{course.name}</p>
    <p className="CourseBlock-id">
      <span>{course.cnum} </span>
      <span className="CourseBlock-crn">{course.crn}</span>
    </p>
    <span className="CourseBlock-time">
        {timeToStringNoMeridiem(start)} - {timeToStringNoMeridiem(end)}
    </span>
  </div>
)

export default CourseBlock
