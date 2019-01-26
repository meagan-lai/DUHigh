import React from "react";
import { Button, View, Text } from "react-native";

export default class BalanceScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Balance Screen</Text>
        <Button
          title="Get Results"
          onPress={() => this.props.navigation.navigate("Results")}
        />
      </View>
    );
  }
}
