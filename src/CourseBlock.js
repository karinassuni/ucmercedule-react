import React from 'react'
import {to12HourStringNoMeridiem as timeToStringNoMeridiem, militaryTime} from './util/Time'
import tinycolor from 'tinycolor2'
import './CourseBlock.css'

function getDepartmentColor(department) {
  const engineering = ['Bio Engin Small Scale Tech','Bioengineering','Computer Science & Engineering','Elect. Engr. & Comp. Sci.','Engineering','Environmental Engineering','Mechanical Engineering','Materials Science and Engr','Physics']
  const naturalSciences = ['Biological Sciences','Chemistry','Environmental Systems (GR)','Earth Systems Science','Nat Sciences Undergrad Studies','Quantitative & Systems Biology', 'Mathematics']
  const socialStudiesHumanitiesArts = ['Anthropology','Art','Chicano Chicana Studies','Chinese','Cognitive Science','Core','Community Research and Service','Economics','English','French','Global Arts Studies Program','History','Interdisciplinary Humanities','Japanese','Management','Natural Sciences Education','Public Health',' Philosophy','Political Science','Psychology','Social Sciences','Sociology','Spanish','Undergraduate Studies','World Heritage','Writing']
  const categories = {engineering, naturalSciences, socialStudiesHumanitiesArts}

  for (let name in categories) {
    let foundIndex = categories[name].indexOf(department)
    if (foundIndex !== -1) {
      let color = undefined
      switch (name) {
        case "engineering":
          color = tinycolor("hsl 0 67% 35%")
          break;
        case "naturalSciences":
          color = tinycolor("hsl 45 67% 35%")
          break;
        case "socialStudiesHumanitiesArts":
          color = tinycolor("hsl 220 67% 35%")
          break;
        default:
          color = tinycolor("hsl 120 67% 35%")
      }
      color.saturate(8)
      color.spin(1)
      color.lighten(5)
      return color.toHexString()
    }
  }
}

function minutesBetween(start, end) {
  return (end.hour - start.hour) + (end.minute - start.minute) / 60
}

const CourseBlock = ({course, style}) => {
  let start = course.start
  let end = course.end
  let height = 4.125 * (minutesBetween(start, end)) + "em"
  let backgroundColor = getDepartmentColor(course.department)
  return (
    <div className="CourseBlock" style={{...style, height, backgroundColor}}>
      <p className="name">{course.name}</p>
      <p className="time">
        {timeToStringNoMeridiem(start)} - {timeToStringNoMeridiem(end)}
      </p>
    </div>
  )
}

export default CourseBlock
