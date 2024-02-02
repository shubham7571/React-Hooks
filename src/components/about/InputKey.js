import React, { useState, useRef, useEffect } from 'react';

function  Inputkey() {
  const [inputs, setInputs] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    // Add more inputs as needed
  });

  const inputRefs = {
    input1: useRef(null),
    input2: useRef(null),
    input3: useRef(null),
  };

  useEffect(() => {
    inputRefs.input1.current.focus();
  }, []);

  const handleChange = (fieldName, value) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [fieldName]: value,
    }));

    const maxLength =6 ; // Adjust as needed
    if (value.length >= maxLength) {
      // Move focus to the next input field
      const nextInputName = getNextInput(fieldName);
      if (nextInputName) {
        inputRefs[nextInputName].current.focus();
      }
    }
  };

  const getNextInput = (currentInput) => {
    const inputNames = Object.keys(inputs);
    const currentIndex = inputNames.indexOf(currentInput);
    return inputNames[currentIndex + 1];
  };

  return (
    <form>
      {Object.keys(inputs).map((inputName) => (
        <input
          key={inputName}
          type="text"
          value={inputs[inputName]}
          onChange={(e) => handleChange(inputName, e.target.value)}
          maxLength={6}
          ref={inputRefs[inputName]}
        />
        
      )
      )}
    </form>
  );
}

export default  Inputkey;
