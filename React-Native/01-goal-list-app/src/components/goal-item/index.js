import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
  goalItem: {
    flex: 1,
    margin: 2,
    borderRadius: 5,
    backgroundColor: "#5E0ACC",
  },

  pressableItem: {
    flex: 1,
    flexDirection: "row",
    padding: 8,
  },

  pressedEffect: {
    opacity: 0.5,
  },

  pressedEffect__ripple: {
    color: "#dddddd",
  },

  goalItem__textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  goalItem__text: {
    color: "#FFFFFF",
    marginHorizontal: 5,
    padding: 2,
    fontWeight: "bold",
  },

  goalItem__index: {
    padding: 2,
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    color: "#5E0ACC",
    borderRadius: 5,
  },

  goalItem__indexText: {
    textAlign: "center",
    fontWeight: "bold",
    verticalAlign: "middle",
  },

  goalItem__iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  goalItem__icon: {
    width: 32,
    height: 32,
  },
});

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
