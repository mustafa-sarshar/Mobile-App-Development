import { StyleSheet } from "react-native";
import { colors } from "../../utils";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
    padding: 8,
  },

  titleContainer: {
    flex: 1,
    alignItems: "center",
    marginBottom: 8,
  },

  titleWrapper: {
    marginBottom: 8,
    padding: 18,
    backgroundColor: colors.blue500,
    borderRadius: 8,
  },

  lblTitle: {
    fontFamily: "font-fugaz",
    padding: 16,
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    borderRadius: 8,
  },

  lblTitle__numbers: {
    color: colors.yellow500,
  },

  userInputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    padding: 16,
  },

  inputsWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  inputWrapper: {
    flex: 1,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.yellow500,
    elevation: 4,
  },

  assistWrapper: {
    borderRadius: 8,
  },

  imgAssistContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
    padding: 18,
    borderRadius: 8,
    backgroundColor: colors.yellow400,
    elevation: 4,
  },

  imgAssist: {
    width: 50,
    height: 50,
  },

  lblAssist: {
    fontFamily: "font-alegreya",
    color: "#000000",
    fontSize: 20,
    textAlign: "center",
  },

  btnWrapper: {
    flex: 1,
  },

  lstGuessesContainer: {
    flex: 1,
  },
});

export default styles;
