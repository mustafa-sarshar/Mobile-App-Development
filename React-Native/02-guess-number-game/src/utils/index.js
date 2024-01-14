import { useState } from "react";
import { Dimensions } from "react-native";

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

// Global COLORS used for styling
const COLORS = {
  yellow400: "#e3c55f",
  yellow500: "#DDB52F",
  yellow400Transparent50: "#e3c55f50",
  yellow400Transparent90: "#e3c55f90",
  orange500: "#b85600",
  orange500Transparent70: "#b8560070",
  orange500Transparent90: "#b8560090",
  blue500: "#100c61",
  blue500Transparent30: "#100c6130",
  red100: "#ed8e87",
  red500: "#d10a0a",
  red500Transparent90: "#d10a0a90",
  red900: "#750901",
  green900: "#225e07",
};

const APP_DIMENSIONS = {
  winWidth: Dimensions.get("window").width,
  winHeight: Dimensions.get("window").height,
};

export { useStateWithCallback, generateRandomNumber, COLORS, APP_DIMENSIONS };
