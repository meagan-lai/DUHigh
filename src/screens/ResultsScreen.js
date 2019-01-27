import React from "react";
import { Button, View, Text } from "react-native";
import { navigationOptions } from "react-navigation";

export default class ResultsScreen extends React.Component {
  static navigationOptions = {
    headerLeft: null
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Results Screen</Text>
        <Button
          title="Try Again"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}
