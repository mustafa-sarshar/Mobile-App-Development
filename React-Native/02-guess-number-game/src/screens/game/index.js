import React, { useState } from "react";
import { View, Text, Alert, Image, TouchableOpacity } from "react-native";

import InputNumber from "../../components/input-number";
import PrimaryButton from "../../components/custom-buttons/primary-button";
import { generateRandomNumber, useStateWithCallback } from "../../utils";
import styles from "./styles";

const GameScreen = (props) => {
  const { userLowerRange, userUpperRange, onGuessCorrect, randomNum } = props;
  const [guessedNumber, setGuessedNumber] = useState("0");
  const [numbersGuessed, setNumbersGuessed] = useStateWithCallback([]);
  const [curLowerRange, setCurLowerRange] = useState(userLowerRange);
  const [curUpperRange, setCurUpperRange] = useState(userUpperRange);

  const getAssistHandler = () => {
    const num = generateRandomNumber(
      curLowerRange,
      curUpperRange + 1,
      numbersGuessed
    );
    setGuessedNumber(`${num}`);
  };

  const resetInputHandler = () => {
    setGuessedNumber("0");
  };

  const changeNumberHandler = (num) => {
    setGuessedNumber(num.trim());
  };

  const validateRange = (num) => {
    const numEntered = parseInt(num.trim());
    if (numEntered >= userLowerRange && numEntered <= userUpperRange) {
      return true;
    } else {
      return false;
    }
  };

  const updateRanges = () => {
    const intGuessedNumber = parseInt(guessedNumber);
    if (intGuessedNumber > randomNum) {
      Alert.alert("Help", `Too High`, [
        {
          text: "OK",
          style: "destructive",
          onPress: () => {
            setCurUpperRange(intGuessedNumber - 1);
          },
        },
      ]);
    } else {
      Alert.alert("Help", `Too Low`, [
        {
          text: "OK",
          style: "destructive",
          onPress: () => {
            setCurLowerRange(intGuessedNumber + 1);
          },
        },
      ]);
    }
  };

  const checkNumberHandler = async () => {
    if (!validateRange(guessedNumber)) {
      Alert.alert(
        "Invalid number",
        `Entered value must be a number between ${userLowerRange} and ${userUpperRange}`,
        [{ text: "OK", style: "destructive", onPress: resetInputHandler }]
      );
    } else {
      setNumbersGuessed(
        [...numbersGuessed, guessedNumber],
        (prevValue, newValue) => {
          console.log("prevValue", prevValue);
          console.log("newValue", newValue);
          if (parseInt(guessedNumber) !== randomNum) {
            updateRanges();
          } else {
            onGuessCorrect(newValue);
          }
        }
      );
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.lblTitle}>
          Try to guess the random number between {userLowerRange} and{" "}
          {userUpperRange} (answer: ${randomNum}).
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
