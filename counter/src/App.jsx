import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  //let counter = 15;
  const addValue = () => {
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Counter value:{counter}</h1>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
