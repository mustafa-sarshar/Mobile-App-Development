import React, { useEffect, useState } from "react";
import { View, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartScreen from "./src/screens/start";
import GameScreen from "./src/screens/game";
import FinishScreen from "./src/screens/finish";

import { generateRandomNumber } from "./src/utils";
import styles from "./styles";

export default function App() {
  const [lowerRangeConfirmed, setLowerRangeConfirmed] = useState();
  const [upperRangeConfirmed, setUpperRangeConfirmed] = useState();
  const [randomNum, setRandomNum] = useState();
  const [guessedNumberCorrect, setGuessedNumberCorrect] = useState(false);
  const [numbersGuessed, setNumbersGuessed] = useState([]);

  const confirmNumberHandler = (lowerRange, upperRange) => {
    setLowerRangeConfirmed(lowerRange);
    setUpperRangeConfirmed(upperRange);
  };

  const guessCorrectHandler = (numbersGuessed) => {
    setGuessedNumberCorrect(true);
    setNumbersGuessed([...numbersGuessed]);
  };

  const startAgainHandler = () => {
    setGuessedNumberCorrect(false);
    setRandomNum();
    setLowerRangeConfirmed();
    setUpperRangeConfirmed();
  };

  useEffect(() => {
    if (lowerRangeConfirmed && upperRangeConfirmed && !randomNum) {
      const num = generateRandomNumber(
        parseInt(lowerRangeConfirmed),
        parseInt(upperRangeConfirmed)
      );
      setRandomNum(num);
    }
  }, [lowerRangeConfirmed, upperRangeConfirmed]);

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
            {!lowerRangeConfirmed || !upperRangeConfirmed || !randomNum ? (
              <StartScreen onConfirmNumber={confirmNumberHandler} />
            ) : !guessedNumberCorrect || numbersGuessed.length < 1 ? (
              <GameScreen
                userLowerRange={lowerRangeConfirmed}
                userUpperRange={upperRangeConfirmed}
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
