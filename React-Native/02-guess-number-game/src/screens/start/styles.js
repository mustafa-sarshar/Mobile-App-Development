import { StyleSheet } from "react-native";
import { colors } from "../../utils";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

  rangeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: colors.blue500,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  lblContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  lblTitle: {
    fontFamily: "font-fugaz",
    color: "#FFFFFF",
    fontSize: 25,
    textAlign: "center",
  },

  inputWrapper: {
    flexDirection: "row",
  },
  
  lblSeparator: {
    color: "#FFFFFF",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
  },

  btnWrapper: {
    flexDirection: "row",
  },

  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
  },
});

export default styles;
