import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";
import { COLORS } from "../../utils";

const ListItem = (props) => {
  const { itemData, lenGuesses } = props;

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>#{lenGuesses - itemData.index}</Text>
      <Text style={styles.itemText}>
        You guessed: {itemData.item.itemValue}
      </Text>
      {itemData.item.itemType === "high" ? (
        <Ionicons name="md-caret-up-sharp" size={24} color={COLORS.green900} />
      ) : (
        <Ionicons name="md-caret-down-sharp" size={24} color={COLORS.red900} />
      )}
    </View>
  );
};

export default ListItem;
