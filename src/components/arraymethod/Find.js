import React, { useState } from 'react';

const Find = () => {
    const [numbers] = useState([1, 2, 3, 4, 5]);
    const [searchResult, setSearchResult] = useState(null);
    //The find() method returns the first element in the array that satisfies the provided testing function.


    const handleSearch = () => {
        const result = numbers.find(num => num > 3);  //only one value return 
        setSearchResult(result);
    };

    return (
        <div>
            <button onClick={handleSearch}>Find Number Greater Than 3</button>
            {searchResult && <p>Found: {searchResult}</p>}
        </div>
    );
};

export default Find;
