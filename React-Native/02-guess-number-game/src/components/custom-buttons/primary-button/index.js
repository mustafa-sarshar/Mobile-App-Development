import React from "react";
import { View, Text, Pressable } from "react-native";

import styles from "./styles";

const PrimaryButton = (props) => {
  const { children, onPress } = props;

  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.btnInnerContainer]
            : styles.btnInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#6c9ff0" }}
      >
        <Text style={styles.btnTitle}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
