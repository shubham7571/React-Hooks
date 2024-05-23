import React, { useState } from 'react';

const FindIndex = () => {
  const [numbers] = useState([1, 2, 3, 4, 5]);
  const [searchIndex, setSearchIndex] = useState(null);

  const handleSearch = () => {
    const index = numbers.findIndex(num => num > 3); // only one index is show 
    setSearchIndex(index);
  };

  return (
    <div>
      <button onClick={handleSearch}>Find Index of Number Greater Than 3</button>
      {searchIndex !== null && <p>Index: {searchIndex}</p>}
    </div>
  );
};

export default FindIndex;
