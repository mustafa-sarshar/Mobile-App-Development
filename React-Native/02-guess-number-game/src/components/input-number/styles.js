import { StyleSheet } from "react-native";
import { colors } from "../../utils";

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
    color: colors.yellow500,
    borderBottomColor: colors.yellow500,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
  },
});

export default styles;
