import React from "react";
import { Button, View, Text } from "react-native";

export default class ResultsScreen extends React.Component {
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
