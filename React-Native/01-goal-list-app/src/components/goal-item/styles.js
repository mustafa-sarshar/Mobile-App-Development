import { StyleSheet } from "react-native";

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

export default styles;
