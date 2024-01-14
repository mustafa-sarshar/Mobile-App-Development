import React, { useState } from "react";
import { View, TextInput, Button, Alert, Modal, Image } from "react-native";

import styles from "./styles";

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
