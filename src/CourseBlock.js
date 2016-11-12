import React from 'react'
import './CourseBlock.css'

const CourseBlock = ({course}) => (
  <div className="CourseBlock">
    <p className="CourseBlock-name">{course.name}</p>
    <p className="CourseBlock-id">
      <span>{course.cnum} </span>
      <span className="CourseBlock-crn">{course.crn}</span>
    </p>
    <span className="CourseBlock-time">
      {course.time.start} - {course.time.end}
    </span>
  </div>
)

export default CourseBlock
