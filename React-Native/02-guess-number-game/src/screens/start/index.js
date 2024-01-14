import React, { useState } from "react";
import { View, Text, Alert, Image } from "react-native";

import PrimaryButton from "../../components/custom-buttons/primary-button";
import InputNumber from "../../components/input-number";
import styles from "./styles";

const StartScreen = (props) => {
  const { onConfirmNumber } = props;
  const [enteredLowerRange, setEnteredLowerRange] = useState("1");
  const [enteredUpperRange, setEnteredUpperRange] = useState("100");

  const changeLowerRangeHandler = (num) => {
    setEnteredLowerRange(num.trim());
  };

  const changeUpperRangeHandler = (num) => {
    setEnteredUpperRange(num.trim());
  };

  const resetInputHandler = () => {
    setEnteredLowerRange("1");
    setEnteredUpperRange("100");
  };

  const validateNumberEntered = (num) => {
    if (isNaN(num) || num < 1 || num > 999_999_999) {
      return false;
    } else {
      return true;
    }
  };

  const checkNumberHandler = () => {
    const lowerRange = parseInt(enteredLowerRange);
    const upperRange = parseInt(enteredUpperRange);

    if (
      !validateNumberEntered(lowerRange) ||
      !validateNumberEntered(upperRange)
    ) {
      Alert.alert(
        "Invalid numbers",
        "Entered value must be a number between 1 and 999,999,999",
        [{ text: "OK", style: "destructive", onPress: resetInputHandler }]
      );
    } else if (upperRange <= lowerRange) {
      Alert.alert(
        "Invalid numbers",
        "The left number 'lower range' must be less than the right number 'upper range'.",
        [{ text: "OK", style: "destructive", onPress: resetInputHandler }]
      );
    } else {
      onConfirmNumber(lowerRange, upperRange);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.rangeContainer}>
        <View style={styles.lblContainer}>
          <Text style={styles.lblTitle}>Select a Range</Text>
        </View>
        <View style={styles.inputWrapper}>
          <InputNumber
            enteredNumber={enteredLowerRange}
            onChangeNumber={changeLowerRangeHandler}
          />
          <View style={styles.lblContainer}>
            <Text style={styles.lblSeparator}>-</Text>
          </View>
          <InputNumber
            enteredNumber={enteredUpperRange}
            onChangeNumber={changeUpperRangeHandler}
          />
        </View>
        <View style={styles.btnWrapper}>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPress={checkNumberHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
      <View style={styles.imgContainer}>
        <Image source={require("../../assets/img/random.png")} />
      </View>
    </View>
  );
};

export default StartScreen;
