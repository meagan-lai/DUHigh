import React from "react";
import { Button, View, Text } from "react-native";
import { navigationOptions } from "react-navigation";

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
        this.setState({ chanceOfHigh: response.chanceOfHigh });
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
        <Text>{this.state.chanceOfHigh}</Text>
        <Button title="Try Again" onPress={() => this.props.navigation.navigate("Home")} />
      </View>
    );
  }
}
