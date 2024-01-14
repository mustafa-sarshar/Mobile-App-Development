import { StyleSheet } from "react-native";
import { COLORS } from "../../utils";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 50,
    padding: 16,
  },

  cancelImageWrapper: {
    padding: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.red100,
    marginBottom: 16,
  },

  imgCancel: {
    justifyContent: "center",
    alignItems: "center",
  },

  feedbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },

  feedbackText: {
    color: COLORS.red100,
    fontFamily: "font-fugaz",
    fontSize: 25,
    backgroundColor: COLORS.blue500Transparent30,
    textAlign: "center",
  },

  highlight: {
    color: COLORS.red500,
  },

  listGuessesWrapper: {
    flex: 1,
    width: "80%",
    marginBottom: 24,
  },

  listGuessesTitle: {
    paddingVertical: 16,
    fontSize: 20,
    textAlign: "center",
    marginBottom: 4,
    color: "#FFFFFF",
    borderRadius: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#FFFFFF",
    backgroundColor: COLORS.blue500,
  },

  btnWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
