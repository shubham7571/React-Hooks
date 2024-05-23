import React, { useState } from 'react';

const Includes = () => {
  const [numbers] = useState([1, 2, 3, 4, 5]);
  const [includesNumber, setIncludesNumber] = useState(false);

  const handleCheck = () => {
    const result = numbers.includes(3);
    setIncludesNumber(result);
  };

  return (
    <div>
      <button onClick={handleCheck}>Check If Array Includes 3</button>
      {includesNumber ? <p>Array includes the number 3</p> : <p>Array does not include the number 3</p>}
    </div>
  );
};

export default Includes;
