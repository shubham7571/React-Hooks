// import React, { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   const total = () => {
//     setCount(50000 ** 2);
//   }

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <h1>Total: {total}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>




//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';

function Increment() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default Increment;
