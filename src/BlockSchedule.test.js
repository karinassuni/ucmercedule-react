import React from 'react';
import ReactDOM from 'react-dom';
import BlockSchedule from './BlockSchedule';

const courses = [
  {
    name: "Anthropological Archaeology",
    cnum: "ANTH-003-01",
    type: "LECT",
    crn: 10265,
    start: {hour: 11, minute: 30},
    end: {hour: 13, minute: 15},
    days: "TR"
  },
  {
    name: "Electrodynamics Core II Waves",
    cnum: "PHYS-115-01",
    type: "LECT",
    crn: 15390,
    start: {hour: 13, minute: 30},
    end: {hour: 14, minute: 45},
    days: "TR"
  }
]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlockSchedule courses={courses}/>, div);
});
