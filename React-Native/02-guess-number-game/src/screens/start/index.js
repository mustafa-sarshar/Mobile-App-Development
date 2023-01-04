import React, { useState } from "react";
import { View, Text, Alert, Image } from "react-native";

import PrimaryButton from "../../components/custom-buttons/primary-button";
import InputNumber from "../../components/input-number";
import styles from "./styles";

const StartScreen = (props) => {
  const { onConfirmNumber } = props;
  const [enteredNumberFrom, setEnteredNumberFrom] = useState("1");
  const [enteredNumberTo, setEnteredNumberTo] = useState("100");

  const changeNumberFromHandler = (num) => {
    setEnteredNumberFrom(num.trim());
  };

  const changeNumberToHandler = (num) => {
    setEnteredNumberTo(num.trim());
  };

  const resetInputHandler = () => {
    setEnteredNumberFrom("1");
    setEnteredNumberTo("100");
  };

  const validateNumberEntered = (num) => {
    if (isNaN(num) || num < 1 || num > 999_999_999) {
      return false;
    } else {
      return true;
    }
  };

  const checkNumberHandler = () => {
    const numFrom = parseInt(enteredNumberFrom);
    const numTo = parseInt(enteredNumberTo);

    if (!validateNumberEntered(numFrom) || !validateNumberEntered(numTo)) {
      Alert.alert(
        "Invalid numbers",
        "Entered value must be a number between 1 and 999,999,999",
        [{ text: "OK", style: "destructive", onPress: resetInputHandler }]
      );
    } else if (numTo <= numFrom) {
      Alert.alert(
        "Invalid numbers",
        "The left number 'from' must be less than the right number 'to'.",
        [{ text: "OK", style: "destructive", onPress: resetInputHandler }]
      );
    } else {
      onConfirmNumber(numFrom, numTo);
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
            enteredNumber={enteredNumberFrom}
            onChangeNumber={changeNumberFromHandler}
          />
          <View style={styles.lblContainer}>
            <Text style={styles.lblSeparator}>-</Text>
          </View>
          <InputNumber
            enteredNumber={enteredNumberTo}
            onChangeNumber={changeNumberToHandler}
          />
        </View>
        <View style={styles.btnWrapper}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          <PrimaryButton onPress={checkNumberHandler}>Confirm</PrimaryButton>
        </View>
      </View>
      <View style={styles.imgContainer}>
        <Image source={require("../../assets/img/random.png")} />
      </View>
    </View>
  );
};

export default StartScreen;
