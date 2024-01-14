import React from "react";
import { View, Text, Pressable } from "react-native";

import styles from "./styles";

const PrimaryButton = (props) => {
  const { children, onPress, containerStyle, pressableStyle, textStyle } = props;

  return (
    <View style={[styles.btnOuterContainer, containerStyle]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.btnInnerContainer, pressableStyle]
            : [styles.btnInnerContainer, pressableStyle]
        }
        onPress={onPress}
        android_ripple={{ color: "#6c9ff0" }}
      >
        <Text style={[styles.btnTitle, textStyle]}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
