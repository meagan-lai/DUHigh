import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image
} from "react-native";

export default class HomeScreen extends React.Component {
  componentWillMount() {
    this.image = (
      <ImageBackground
        source={require("./Picture1.png")}
        style={styles.backgroundImage}
      >
        <Image
          source={require("./Logo.png")}
          style={{ width: 250, top: 150 }}
          resizeMode="contain"
        />
      </ImageBackground>
    );
  }
  render() {
    return (
      <View style={styles.overlay}>
        {this.image}
        <TouchableOpacity
          style={{ alignItems: "center", bottom: 28 }}
          onPress={() =>
            this.props.navigation.navigate("ExpressionInstructions")
          }
        >
          <View style={styles.button}>
            <Text style={styles.text}>Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 32
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 25
  },
  backgroundImage: {
    height: "85%",
    alignItems: "center"
  },
  overlay: {
    backgroundColor: "#0a1610",
    width: "100%",
    height: "100%",
    alignContent: "center"
  },
  button: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 2,
    paddingVertical: 12,
    width: "60%"
  }
});
