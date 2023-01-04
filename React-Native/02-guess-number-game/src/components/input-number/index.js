import React from "react";
import { View, TextInput } from "react-native";

import styles from "./styles";

const InputNumber = (props) => {
  const { enteredNumber, onChangeNumber } = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.txtInput}
        maxLength={9}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={onChangeNumber}
      />
    </View>
  );
};

export default InputNumber;
