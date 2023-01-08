import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  Alert,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";

import InputNumber from "../../components/input-number";
import PrimaryButton from "../../components/custom-buttons/primary-button";
import ListItem from "../../components/list-item";
import {
  generateRandomNumber,
  useStateWithCallback,
  COLORS,
} from "../../utils";
import styles from "./styles";

const GameScreen = (props) => {
  const { userLowerRange, userUpperRange, onGuessCorrect, onCancel } = props;
  const [randomNum, setRandomNum] = useState();
  const [guessedNumber, setGuessedNumber] = useState("0");
  const [numbersGuessed, setNumbersGuessed] = useStateWithCallback([]);
  const [curLowerRange, setCurLowerRange] =
    useStateWithCallback(userLowerRange);
  const [curUpperRange, setCurUpperRange] =
    useStateWithCallback(userUpperRange);

  useMemo(() => {
    const num = generateRandomNumber(userLowerRange, userUpperRange);
    setRandomNum(num);
  }, []);

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
    if (num.length !== 0) {
      setGuessedNumber(`${parseInt(num.trim())}`);
    } else {
      setGuessedNumber(`${num.trim()}`);
    }
  };

  const validateRangeHandler = (num) => {
    const numEntered = parseInt(num.trim());
    if (numEntered >= userLowerRange && numEntered <= userUpperRange) {
      return true;
    } else {
      return false;
    }
  };

  const updateRanges = () => {
    const intGuessedNumber = parseInt(guessedNumber);
    if (intGuessedNumber === randomNum) {
      updateNumbersGuessedHandler("equal");
    } else if (intGuessedNumber > randomNum) {
      Alert.alert("Help", `Too High`, [
        {
          text: "OK",
          style: "destructive",
          onPress: () => {
            setCurUpperRange(intGuessedNumber - 1, (prevValue, newValue) => {
              console.log(
                "prevUpperRange",
                prevValue,
                "newUpperRange",
                newValue
              );
              updateNumbersGuessedHandler("high");
            });
          },
        },
      ]);
    } else {
      Alert.alert("Help", `Too Low`, [
        {
          text: "OK",
          style: "destructive",
          onPress: () => {
            setCurLowerRange(intGuessedNumber + 1, (prevValue, newValue) => {
              console.log(
                "prevLowerRange",
                prevValue,
                "newLowerRange",
                newValue
              );
              updateNumbersGuessedHandler("low");
            });
          },
        },
      ]);
    }
    setGuessedNumber("0");
  };

  const updateNumbersGuessedHandler = (itemType) => {
    setNumbersGuessed(
      [{ itemValue: guessedNumber, itemType: itemType }, ...numbersGuessed],
      (prevValue, newValue) => {
        console.log("prevGuessedNumber", prevValue);
        console.log("newGuessedNumber", newValue);
        if (parseInt(guessedNumber) === randomNum) {
          onGuessCorrect(newValue);
        }
      }
    );
  };

  const checkNumberHandler = async () => {
    if (!validateRangeHandler(guessedNumber)) {
      Alert.alert(
        "Invalid number",
        `Entered value must be a number between ${userLowerRange} and ${userUpperRange}`,
        [{ text: "OK", style: "destructive", onPress: resetInputHandler }]
      );
    } else {
      updateRanges();
    }
  };

  const cancelHandler = () => {
    onCancel(randomNum, numbersGuessed);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <View style={styles.titleWrapper}>
          <Text style={styles.lblTitle}>
            Try to guess a number between{" "}
            <Text style={styles.lblTitle__numbers}>{userLowerRange}</Text> and{" "}
            <Text style={styles.lblTitle__numbers}>{userUpperRange}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.userInputContainer}>
        <View style={styles.inputsWrapper}>
          <View style={styles.inputWrapper}>
            <InputNumber
              containerStyle={{ backgroundColor: COLORS.blue500 }}
              textStyle={{ fontSize: 23 }}
              enteredNumber={guessedNumber}
              onChangeNumber={changeNumberHandler}
            />
          </View>
          <View style={styles.assistWrapper}>
            <TouchableOpacity
              style={styles.imgAssistContainer}
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
        <View style={styles.btnWrapper}>
          <PrimaryButton
            onPress={checkNumberHandler}
            pressableStyle={{ backgroundColor: COLORS.blue500 }}
            containerStyle={{ borderWidth: 1, borderColor: COLORS.yellow400 }}
            textStyle={{
              fontSize: 17,
              fontWeight: "bold",
              color: COLORS.yellow500,
            }}
          >
            Check your guess
          </PrimaryButton>
          <PrimaryButton
            onPress={cancelHandler}
            pressableStyle={{ backgroundColor: COLORS.red900 }}
            containerStyle={{ borderWidth: 1, borderColor: COLORS.yellow400 }}
            textStyle={{ color: COLORS.yellow500, fontWeight: "bold" }}
          >
            CANCEL
            <Fontisto name="smiley" size={20} color={COLORS.yellow500} />
          </PrimaryButton>
        </View>
      </View>
      <View style={styles.lstGuessesContainer}>
        <FlatList
          data={numbersGuessed}
          alwayBounceVertical={false}
          keyExtractor={(item, idx) => idx}
          renderItem={(itemData) => (
            <ListItem itemData={itemData} lenGuesses={numbersGuessed.length} />
          )}
        />
      </View>
    </View>
  );
};

export default GameScreen;
