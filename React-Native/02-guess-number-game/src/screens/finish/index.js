import React from "react";
import { View, Text, Image } from "react-native";

import PrimaryButton from "../../components/custom-buttons/primary-button";
import { colors } from "../../utils";
import styles from "./styles";

const FinishScreen = (props) => {
  const { onStartAgain, guesses } = props;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.winImageWrapper}>
        <Image
          style={styles.imgWin}
          source={require("../../assets/img/win.png")}
        />
        <Image
          style={styles.imgWin}
          source={require("../../assets/img/winner_yellow.png")}
        />
      </View>
      <View style={styles.feedbackContainer}>
        <Text style={styles.feedbackText}>
          You finally guessed{" "}
          <Text style={styles.highlight}>{guesses[0]} </Text> in
          <Text style={styles.highlight}> {guesses.length} </Text>
          {guesses.length > 1 ? "tries" : "try"}.
        </Text>
      </View>
      <View style={styles.btnWrapper}>
        <PrimaryButton
          onPress={onStartAgain}
          pressableStyle={{ backgroundColor: colors.blue500 }}
          containerStyle={{ borderWidth: 1, borderColor: colors.yellow400 }}
          textStyle={{
            fontSize: 20,
            fontWeight: "bold",
            color: colors.yellow500,
          }}
        >
          Start Again
        </PrimaryButton>
      </View>
    </View>
  );
};

export default FinishScreen;
