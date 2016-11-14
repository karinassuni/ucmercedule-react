import React from 'react'
import {hour24ToHour12} from './util/Time'
import './HourLabel.css'

const HourLabels = ({earliestHour, latestHour}) => {
  let hourLabels = []
  for (let i = earliestHour; i <= latestHour; ++i) {
    let hour12 = hour24ToHour12(i)
    hourLabels.push(
      <div className="hourLabel" key={i}>{hour12.hour}</div>
    )
  }

  return (
    <div className="HourLabels">
      <br></br>
      {[...hourLabels]}
    </div>
  )
}

export default HourLabels
