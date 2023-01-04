import React from "react";
import { View, TextInput } from "react-native";

import styles from "./styles";

const InputNumber = (props) => {
  const { enteredNumber, onChangeNumber, textStyle, containerStyle } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={[styles.txtInput, textStyle]}
        maxLength={9}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={onChangeNumber}
      />
    </View>
  );
};

export default InputNumber;
