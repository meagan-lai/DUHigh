import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default class Instructions1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>2. Pupil Dilation</Text>
        <Text style={styles.instructions}>
          First take a close up picture of the subject's eyes. Then take a
          second picture of the subject's eyes, except this time the flash will
          go off to track the change in pupil dilation.
        </Text>
        <TouchableOpacity
          style={{ position: "absolute", alignItems: "center", bottom: 100 }}
          onPress={() => this.props.navigation.navigate("Pupil")}
        >
          <View style={styles.button}>
            <Text style={styles.text}>Ready</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    display: "flex",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignContent: "center",
    maxWidth: "100%"
  },

  button: {
    backgroundColor: "#d32121",
    borderColor: "#d32121",
    borderWidth: 2,
    width: 350,
    paddingVertical: 18,
    bottom: 0
  },
  text: {
    fontFamily: "Verdana",
    textAlign: "center",
    color: "white",
    fontSize: 23
  },
  header: {
    fontFamily: "Barlow Condensed SemiBold",
    fontSize: 45,
    top: -100,
    textAlign: "left"
  },

  instructions: {
    fontFamily: "Verdana",
    fontSize: 23,
    textAlign: "center",
    display: "flex",
    bottom: 25
  }
});
