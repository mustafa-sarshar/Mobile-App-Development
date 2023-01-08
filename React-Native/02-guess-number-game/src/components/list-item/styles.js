import { StyleSheet } from "react-native";
import { COLORS } from "../../utils";

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 16,
    padding: 12,
    marginVertical: 2,
    backgroundColor: COLORS.yellow400,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },

  itemText: {
    fontFamily: "font-alfa-slab",
    textAlign: "center",
    // color: "#FFFFFF",
  },
});

export default styles;
