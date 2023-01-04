import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
  Modal,
  Image,
} from "react-native";

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

const GoalInput = (props) => {
  const { onAddGoal } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [enteredGoal, setEnteredGoal] = useState("");

  const inputTextHandler = (text) => {
    setEnteredGoal(text);
  };

  const addGoalHandler = () => {
    if (enteredGoal.trim().length > 0) {
      onAddGoal(enteredGoal);
      setEnteredGoal("");
      setIsModalVisible(false);
    } else {
      Alert.alert("Nothing in entered!!!");
    }
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.btnAdd}>
        <Button
          title="Add A New Goal"
          color="#0000AA"
          onPress={() => {
            setIsModalVisible(true);
          }}
        />
      </View>
      <Modal visible={isModalVisible} animation="slide">
        <View style={styles.modalContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageIcon}
              source={require("../../assets/img/goal.png")}
            />
          </View>
          <TextInput
            style={styles.txtInput}
            value={enteredGoal}
            placeholder="enter your goal here"
            onChangeText={inputTextHandler}
          />
          <View style={styles.actionsContainer}>
            <View style={styles.actionsButtons}>
              <Button
                color="#AA00AA"
                title="Cancel"
                onPress={() => setIsModalVisible(false)}
              />
            </View>
            <View style={styles.actionsButtons}>
              <Button
                color="#0000AA"
                title="Add Goal"
                onPress={addGoalHandler}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default GoalInput;
