import React from "react";
import { View, Text, Image, FlatList } from "react-native";

import PrimaryButton from "../../components/custom-buttons/primary-button";
import ListItem from "../../components/list-item";
import styles from "./styles";

const FinishScreen = (props) => {
  const { onStartAgain, guesses } = props;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.lblTitle}>HUUURRRAAAA</Text>
        <Text style={styles.lblTitle}>YOU DID IT</Text>
      </View>
      <View style={styles.winContainer}>
        <Image
          style={styles.imgWin}
          source={require("../../assets/img/win.png")}
        />
      </View>
      <View style={styles.listGuessesWrapper}>
        <Text style={styles.listGuessesTitle}>Guesses (n={guesses.length }):</Text>
        <FlatList
          data={guesses}
          alwayBounceVertical={false}
          keyExtractor={(item, idx) => idx}
          renderItem={(itemData) => <ListItem itemText={itemData.item} />}
        />
      </View>
      <View style={styles.btnWrapper}>
        <PrimaryButton onPress={onStartAgain}>Start Again</PrimaryButton>
      </View>
    </View>
  );
};

export default FinishScreen;
