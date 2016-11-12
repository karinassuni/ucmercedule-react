import React from 'react'
import CourseBlock from './CourseBlock'

const BlockSchedule = ({courses}) => (
  <div>
    {courses.map(course =>
      <CourseBlock
        course={course}
        key={course.crn}
      />
    )}
  </div>
)

export default BlockSchedule
