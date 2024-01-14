import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import GoalInput from "./src/components/goal-input";
import GoalsList from "./src/components/goals-list";

const App = (props) => {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (goal) => {
    setGoals((prevState) => [
      ...prevState,
      { _id: Math.random().toString(), value: goal },
    ]);
  };

  const deleteGoalHandler = (goalId) => {
    setGoals((curState) => curState.filter((goal) => goal._id !== goalId));
  };

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <GoalInput onAddGoal={addGoalHandler} />
        <GoalsList goals={goals} onDeleteGoal={deleteGoalHandler} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 20,
  },
});

export default App;
