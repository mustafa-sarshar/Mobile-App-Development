import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const ListItem = (props) => {
  const { itemData, lenGuesses } = props;

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>#{lenGuesses-itemData.index}</Text>
      <Text style={styles.itemText}>You guessed: {itemData.item}</Text>
    </View>
  );
};

export default ListItem;
