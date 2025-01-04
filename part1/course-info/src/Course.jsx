import React from "react";
import Part from './Part'
const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Content parts={course.parts} />
      </div>
    );
  }
  
  const Header = ({ course }) => <h1>{course.name}</h1>;
  
  const Content = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  
    return (
      <div>
        {parts.map(part => (
          <Part key={part.id} part={part} />
        ))}
        <h3>Total of exercises {total}</h3>
      </div>
    );
  };
  
  const Part = ({ part }) => (
    <p>{part.name} {part.exercises} exercises</p>
  );
  
  export default Course;
  