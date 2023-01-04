import { useState } from "react";

// Source: https://betterprogramming.pub/synchronous-state-in-react-using-hooks-dc77f43d8521
// accessed on 2023-01-04
const useStateWithCallback = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const setValueAndCallback = (newValue, callback) => {
    setValue((prevValue) => {
      if (callback) {
        callback(prevValue, newValue);
      }
      return newValue;
    });
  };

  return [value, setValueAndCallback];
};

// Random number generator based on the given range and exclusion criteria
const generateRandomNumber = (min, max, numsToExclude = []) => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (numsToExclude.indexOf(randomNum) > -1) {
    return generateRandomNumber(min, max, numsToExclude);
  } else {
    return randomNum;
  }
};

// Global colors used for styling
const colors = {
  yellow400: "#e3c55f",
  yellow500: "#DDB52F",
  yellow400Transparent50: "#e3c55f50",
  orange500: "#b85600",
  orange500Transparent70: "#b8560070",
  blue500: "#100c61",
  red500: "#d10a0a",
  red500Transparent90: "#d10a0a90",
};

export { useStateWithCallback, generateRandomNumber, colors };
