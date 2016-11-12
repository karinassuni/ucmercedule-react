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
    time: {
      start: "12:00PM",
      end: "1:15PM"
    },
    days: "TR"
  },
  {
    name: "Electrodynamics Core II Waves",
    cnum: "PHYS-115-01",
    type: "LECT",
    crn: 15390,
    time: {
      start: "1:30PM",
      end: "2:45PM"
    },
    days: "TR"
  }
]

ReactDOM.render(
  <BlockSchedule courses={courses}/>,
  document.getElementById('root')
);
