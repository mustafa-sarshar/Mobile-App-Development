import { StyleSheet } from "react-native";
import { COLORS } from "../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },

  txtInput: {
    height: 50,
    width: 120,
    textAlign: "center",
    fontSize: 20,
    color: COLORS.yellow500,
    borderBottomColor: COLORS.yellow500,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
  },
});

export default styles;
