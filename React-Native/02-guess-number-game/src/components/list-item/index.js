import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const ListItem = (props) => {
  const { itemText } = props;

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{ itemText}</Text>
    </View>
  );
};

export default ListItem;
