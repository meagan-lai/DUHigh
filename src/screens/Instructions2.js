import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Button } from "react-native";

export default class Instructions2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Get Started 222</Text>
        </View>
        <View style={styles.button}>
          <Button
            title="Begin"
            onPress={() => this.props.navigation.navigate("Pupil")}
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
