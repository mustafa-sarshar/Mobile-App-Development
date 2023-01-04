import React, { useState } from "react";
import { View, Text, Alert, Image, TouchableOpacity } from "react-native";

import InputNumber from "../../components/input-number";
import PrimaryButton from "../../components/custom-buttons/primary-button";
import { generateRandomNumber, useStateWithCallback } from "../../utils";
import styles from "./styles";

const GameScreen = (props) => {
  const { numFrom, numTo, onGuessCorrect, randomNum } = props;
  const [guessedNumber, setGuessedNumber] = useState("0");
  // const [numbersGuessed, setNumbersGuessed] = useState([]);
  const [numbersGuessed, setNumbersGuessed] = useStateWithCallback([]);

  const getAssistHandler = () => {
    const num = generateRandomNumber(numFrom, numTo + 1, numbersGuessed);
    setGuessedNumber(`${num}`);
  };

  const resetInputHandler = () => {
    setGuessedNumber("0");
  };

  const changeNumberHandler = (num) => {
    setGuessedNumber(num);
  };

  const checkRange = (num) => {
    if (num >= numFrom && num <= numTo) {
      return true;
    } else {
      return false;
    }
  };

  const checkNumberHandler = async () => {
    if (!checkRange(guessedNumber)) {
      Alert.alert(
        "Invalid number",
        `Entered value must be a number between ${numFrom} and ${numTo}`,
        [{ text: "OK", style: "destructive", onPress: resetInputHandler }]
      );
    } else {
      setNumbersGuessed(
        [...numbersGuessed, guessedNumber],
        (prevValue, newValue) => {
          console.log("newValue", newValue);
          if (guessedNumber !== randomNum) {
            Alert.alert(
              "Incorrect guess",
              `You guessed ${guessedNumber}, which is not correct`,
              [{ text: "OK", style: "cancel", onPress: resetInputHandler }]
            );
          } else {
            onGuessCorrect(numbersGuessed);
          }
        }
      );
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.lblTitle}>
          Try to guess the random number between {numFrom} and {numTo} (answer:
          ${randomNum}).
        </Text>
      </View>
      <View style={styles.userInputContainer}>
        <View style={styles.inputWrapper}>
          <InputNumber
            enteredNumber={guessedNumber}
            onChangeNumber={changeNumberHandler}
          />
        </View>
        <View style={styles.btnWrapper}>
          <PrimaryButton onPress={checkNumberHandler}>Check</PrimaryButton>
        </View>
      </View>
      <View style={styles.assistContainer}>
        <TouchableOpacity
          style={styles.imgContainer}
          onPress={getAssistHandler}
        >
          <Image
            style={styles.imgAssist}
            source={require("../../assets/img/bot.png")}
          />
          <Text style={styles.lblAssist}>Get Help</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GameScreen;
