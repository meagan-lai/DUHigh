import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { navigationOptions } from "react-navigation";
import axios from "react-native-axios";

export default class ResultsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chanceOfHigh: 0
    };
  }
  componentDidMount = () => {
    axios({
      method: "get",
      url: "http://ryannourbaran.pythonanywhere.com/results"
    })
      .then(response => {
        this.setState({ chanceOfHigh: response.data.chanceOfHigh });
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  static navigationOptions = {
    headerLeft: null
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ bottom: 30 }}>
          <Text style={{ textAlign: "center", color: "white", fontSize: 40 }}>
            Chance of Intoxication:
          </Text>
          <Text style={{ textAlign: "center", color: "red", fontSize: 90 }}>
            {parseInt(this.state.chanceOfHigh) + 20}%
          </Text>
        </View>
        <TouchableOpacity
          style={{
            position: "absolute",
            alignItems: "center",
            bottom: 150,
            width: "60%"
          }}
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <View style={styles.button}>
            <Text style={styles.text}>Try Again</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 25
  },

  button: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 2,
    paddingVertical: 12,
    width: "60%"
  }
});
