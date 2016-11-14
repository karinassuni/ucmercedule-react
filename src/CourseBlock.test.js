import React from 'react';
import ReactDOM from 'react-dom';
import CourseBlock from './CourseBlock';

const course = {
    name: "Electrodynamics Core II Waves",
    cnum: "PHYS-115-01",
    type: "LECT",
    crn: 15390,
    start: {hour: 11, minute: 30},
    end: {hour: 13, minute: 15},
    days: "TR"
  }

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CourseBlock course={course}/>, div);
});
