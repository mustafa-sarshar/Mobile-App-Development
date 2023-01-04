import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  btnOuterContainer: {
    flex: 1,
    borderRadius: 8,
    margin: 4,
    overflow: "hidden",
  },
  btnInnerContainer: {
    backgroundColor: "#3f84f2",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  btnTitle: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.1,
  },
});

export default styles;
