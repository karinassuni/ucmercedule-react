import React from 'react';
import ReactDOM from 'react-dom';
import BlockSchedule from './BlockSchedule'
import './index.css';

const courses = [
  {
    name: "Anthropological Archaeology",
    cnum: "ANTH-003-01",
    type: "LECT",
    crn: 10265,
    department: "Anthropology",
    start: {hour: 12, minute: 30},
    end: {hour: 13, minute: 15},
    days: "MTR"
  },
  {
    name: "Electrodynamics Core II Waves",
    cnum: "PHYS-115-01",
    type: "LECT",
    crn: 15390,
    department: "Physics",
    start: {hour: 13, minute: 30},
    end: {hour: 14, minute: 45},
    days: "TR"
  }
]

ReactDOM.render(
  <BlockSchedule courses={courses}/>,
  document.getElementById('root')
);
