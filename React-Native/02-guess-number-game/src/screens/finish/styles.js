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
    flex: 1,
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

  winContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
  },

  listGuessesWrapper: {
    flex: 1,
    width: "80%",
    marginBottom: 24,
  },

  listGuessesTitle: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 4,
    color: "#FFFFFF",
    borderBottomWidth: 2,
    borderBottomColor: "#FFFFFF",
    backgroundColor: colors.blue500,
  },

  btnWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
