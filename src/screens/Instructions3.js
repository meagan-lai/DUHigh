import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Button } from "react-native";

export default class Instructions3 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Get Started 33</Text>
        </View>
        <View style={styles.button}>
          <Button
            title="Begin"
            onPress={() => this.props.navigation.navigate("Balance")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    borderWidth: 1,
    borderColor: "black",
    position: "absolute",
    bottom: 0
  }
});
