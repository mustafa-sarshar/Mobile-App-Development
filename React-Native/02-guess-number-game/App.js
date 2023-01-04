import React, { useState, useCallback, useEffect } from "react";
import { View, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import StartScreen from "./src/screens/start";
import GameScreen from "./src/screens/game";
import FinishScreen from "./src/screens/finish";

import styles from "./styles";
import CancelScreen from "./src/screens/cancel";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [lowerRangeConfirmed, setLowerRangeConfirmed] = useState();
  const [upperRangeConfirmed, setUpperRangeConfirmed] = useState();
  const [guessedNumberCorrect, setGuessedNumberCorrect] = useState(false);
  const [numbersGuessed, setNumbersGuessed] = useState([]);
  const [randomNum, setRandomNum] = useState();
  const [isCanceled, setIsCanceled] = useState(false);

  const [fontsLoaded, fontsError] = useFonts({
    "font-alegreya": require("./src/assets/fonts/ALEGREYA_900ITALIC.ttf"),
    "font-alfa-slab": require("./src/assets/fonts/ALFA_SLAB_ONE_REGULAR.ttf"),
    "font-fugaz": require("./src/assets/fonts/FUGAZ_ONE_REGULAR.ttf"),
  });

  // Load required assets
  useEffect(() => {
    if (fontsLoaded && !fontsError) {
      setAppIsReady(true);
      console.log("App is ready");
    }
  }, [fontsLoaded, fontsError]);

  // Control the SplashScreen behavior based on loading status of the required assets
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded && !fontsError) {
      setAppIsReady(true);
    }
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const confirmNumberHandler = (lowerRange, upperRange) => {
    setLowerRangeConfirmed(lowerRange);
    setUpperRangeConfirmed(upperRange);
  };

  const guessCorrectHandler = (numbersGuessed) => {
    setGuessedNumberCorrect(true);
    setNumbersGuessed([...numbersGuessed]);
  };

  const cancelHandler = (randomNum, numbersGuessed) => {
    setGuessedNumberCorrect(true);
    setNumbersGuessed([...numbersGuessed]);
    setRandomNum(randomNum);
    setIsCanceled(true);
  };

  const startAgainHandler = () => {
    setGuessedNumberCorrect(false);
    setNumbersGuessed([]);
    setLowerRangeConfirmed();
    setUpperRangeConfirmed();
    setRandomNum();
    setIsCanceled(false);
  };

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
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
            {!lowerRangeConfirmed || !upperRangeConfirmed ? (
              <StartScreen onConfirmNumber={confirmNumberHandler} />
            ) : !guessedNumberCorrect ? (
              <GameScreen
                userLowerRange={lowerRangeConfirmed}
                userUpperRange={upperRangeConfirmed}
                onGuessCorrect={guessCorrectHandler}
                onCancel={cancelHandler}
              />
            ) : !randomNum || !isCanceled ? (
              <FinishScreen
                onStartAgain={startAgainHandler}
                guesses={numbersGuessed}
              />
            ) : (
              <CancelScreen
                onStartAgain={startAgainHandler}
                guesses={numbersGuessed}
                randomNum={randomNum}
              />
            )}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}
