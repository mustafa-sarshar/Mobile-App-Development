import React from "react";
import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

const GoalItem = (props) => {
  const { itemData, onDeleteGoal } = props;

  const deleteGoalHandler = (props) => {
    onDeleteGoal(itemData.item._id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        style={({ pressed }) => {
          if (pressed) {
            // Add extra effect for IOs users when pressed
            return [styles.pressableItem, styles.pressedEffect];
          } else {
            // Return the normal style
            return [styles.pressableItem];
          }
        }}
        android_ripple={styles.pressedEffect__ripple}
        onPress={() => {}}
      >
        <View style={styles.goalItem__index}>
          <Text style={styles.goalItem__indexText}>{itemData.index + 1}</Text>
        </View>
        <View style={styles.goalItem__textContainer}>
          <Text style={styles.goalItem__text}>{itemData.item.value}</Text>
        </View>
        <TouchableOpacity style={styles.goalItem__iconContainer}>
          <Image
            style={styles.goalItem__icon}
            source={require("../../assets/img/target.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.goalItem__iconContainer}
          onPress={deleteGoalHandler}
        >
          <Image
            style={styles.goalItem__icon}
            source={require("../../assets/img/delete.png")}
          />
        </TouchableOpacity>
      </Pressable>
    </View>
  );
};

export default GoalItem;
