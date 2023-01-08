import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "gray",
    borderStyle: "solid",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    backgroundColor: "#5E0ACC",
  },

  imageContainer: {
    margin: 20,
    padding: 20,
    borderRadius: 8,
  },

  imageIcon: {
    width: 100,
    height: 100,
  },

  btnAdd: {
    width: "100%",
  },

  txtInput: {
    color: "#5E0ACC",
    backgroundColor: "#FFFFFF",
    width: "100%",
    marginRight: 8,
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#cccccc",
    textAlign: "center",
    fontWeight: "bold",
  },

  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  actionsButtons: {
    margin: 5,
  },
});

export default styles;
