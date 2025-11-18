const Header = (props) => {
  return (
    <div>
      <h2>{props.course}</h2>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part}, exercises: {props.exercise}
      </p>
    </div>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part.name} exercise={part.exercises} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  const initial = 0;
  const total = parts.reduce((s, p) => {
    return s + p.exercises;
  }, initial);

  return (
    <div>
      <strong>Total of {total} exercises</strong>
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
