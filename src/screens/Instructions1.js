import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Button } from "react-native";

export default class Instructions1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Get Started</Text>
        </View>
        <View style={styles.button}>
          <Button
            title="Begin"
            onPress={() => this.props.navigation.navigate("FacialExpression")}
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
    position: "absolute",
    borderWidth: 1,
    borderColor: "black",
    bottom: 0
  }
});
