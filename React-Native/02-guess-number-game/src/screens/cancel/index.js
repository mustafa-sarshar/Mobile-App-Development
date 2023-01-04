import React from "react";
import { View, Text, Image } from "react-native";

import PrimaryButton from "../../components/custom-buttons/primary-button";
import { colors } from "../../utils";
import styles from "./styles";

const CancelScreen = (props) => {
  const { onStartAgain, guesses, randomNum } = props;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.cancelImageWrapper}>
        <Image
          style={styles.imgCancel}
          source={require("../../assets/img/crying.png")}
        />
      </View>
      <View style={styles.feedbackContainer}>
        <Text style={styles.feedbackText}>
          Unfortunately, you couldn't guess the number{" "}
          <Text style={styles.highlight}>{randomNum}</Text> after{" "}
          <Text style={styles.highlight}>{guesses.length}</Text>{" "}
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

export default CancelScreen;
