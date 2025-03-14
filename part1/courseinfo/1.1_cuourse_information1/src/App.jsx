
function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;


  const Header = (course) => {
    return (
      <>
        <h1>{course.course}</h1>
      </>
    );
  };
  
  const Content = () => {
    return (
      <>
        <p>
          <Part part={part1} total={exercises1}/>
          <Part part={part2} total={exercises2}/>
          <Part part={part3} total={exercises3}/>
  
        </p>
        
      </>
    );
  };
  
  const Total = (props) => {
    return (
      <>
        <p>Total of exercises {props.total} </p>
      </>
    );
  };


  const Part = (props) => {
    return   <>
        <p>Title Of Course {props.part} </p>
        <p>Number of exercises {props.total} </p>
      </>
  };

  return (
    <>
      <div>
        <Header course={course} />
        <Content />
        <Total total={exercises1 + exercises2 + exercises3} />
      </div>
    </>
  );
}

export default App;
