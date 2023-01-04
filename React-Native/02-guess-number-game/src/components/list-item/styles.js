import { StyleSheet } from "react-native";
import { colors } from "../../utils";

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 2,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: colors.yellow400,
  },

  itemText: {
    flex: 1,
    textAlign: "center",
    color: "#000000",
    fontWeight: "bold",
  },
});

export default styles;
