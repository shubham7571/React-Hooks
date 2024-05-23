import React, { useState } from 'react';

const FilterMethod = () => {
  const [numbers] = useState([1, 2, 3, 4, 5]);
  const [filteredNumbers, setFilteredNumbers] = useState([]);

  const handleFilter = () => {
    const result = numbers.filter(num => num > 3);
    setFilteredNumbers(result);
  };

  return (
    <div>
      <button onClick={handleFilter}>Filter Numbers Greater Than 3</button>
      {filteredNumbers.length > 0 && <p>Filtered: {filteredNumbers.join(', ')}</p>}
    </div>
  );
};

export default FilterMethod;
