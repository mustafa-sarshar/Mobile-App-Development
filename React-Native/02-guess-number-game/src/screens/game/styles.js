import { StyleSheet } from "react-native";
import { colors } from "../../utils";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
    marginHorizontal: 24,
    padding: 16,
  },

  titleContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 8,
    padding: 18,
    backgroundColor: colors.orange500Transparent70,
    borderRadius: 8,
    marginBottom: 16,
  },

  lblTitle: {
    padding: 16,
    color: colors.yellow500,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 8,
  },

  userInputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  inputWrapper: {
    flex: 1,
    marginVertical: 8,
    padding: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.yellow400,
    elevation: 4,
  },

  btnWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  assistContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    borderRadius: 8,
  },

  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    padding: 18,
    backgroundColor: colors.orange500,
    borderRadius: 8,
    elevation: 4,
  },

  imgAssist: {
    width: 50,
    height: 50,
  },

  lblAssist: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
