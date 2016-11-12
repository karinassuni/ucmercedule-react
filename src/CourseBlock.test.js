import React from 'react';
import ReactDOM from 'react-dom';
import CourseBlock from './CourseBlock';

const course = {
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

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CourseBlock course={course}/>, div);
});
