import React, { useEffect, useState } from "react";
import { View, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartScreen from "./src/screens/start";
import GameScreen from "./src/screens/game";
import FinishScreen from "./src/screens/finish";

import { generateRandomNumber } from "./src/utils";
import styles from "./styles";

export default function App() {
  const [numberConfirmedFrom, setNumberConfirmedFrom] = useState();
  const [numberConfirmedTo, setNumberConfirmedTo] = useState();
  const [randomNum, setRandomNum] = useState();
  const [guessedNumberCorrect, setGuessedNumberCorrect] = useState(false);
  const [numbersGuessed, setNumbersGuessed] = useState([]);

  const confirmNumberHandler = (numFrom, numTo) => {
    setNumberConfirmedFrom(numFrom);
    setNumberConfirmedTo(numTo);
  };

  const guessCorrectHandler = (numbersGuessed) => {
    setGuessedNumberCorrect(true);
    setNumbersGuessed([...numbersGuessed]);
  };

  const startAgainHandler = () => {
    setGuessedNumberCorrect(false);
    setRandomNum();
    setNumberConfirmedFrom();
    setNumberConfirmedTo();
  };

  useEffect(() => {
    if (numberConfirmedFrom && numberConfirmedTo && !randomNum) {
      const num = generateRandomNumber(
        parseInt(numberConfirmedFrom),
        parseInt(numberConfirmedTo)
      );
      setRandomNum(`${num}`);
    }
  }, [numberConfirmedFrom, numberConfirmedTo]);

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.container}
        colors={["#DDB52F", "#2657a6", "#031838"]}
      >
        <ImageBackground
          source={require("./src/assets/img/denes-kozma-bOX94WfI4YE-unsplash.jpg")}
          resizeMode="cover"
          style={styles.container}
          imageStyle={{ opacity: 0.65 }}
        >
          <SafeAreaView style={styles.container}>
            {!numberConfirmedFrom || !numberConfirmedTo || !randomNum ? (
              <StartScreen onConfirmNumber={confirmNumberHandler} />
            ) : !guessedNumberCorrect || numbersGuessed.length < 1 ? (
              <GameScreen
                numFrom={numberConfirmedFrom}
                numTo={numberConfirmedTo}
                onGuessCorrect={guessCorrectHandler}
                randomNum={randomNum}
              />
            ) : (
              <FinishScreen onStartAgain={startAgainHandler} guesses={numbersGuessed} />
            )}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}
