import React from "react";
import { Button, View, Text } from "react-native";

export default class PupilScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Pupil Screen</Text>
        <Button
          title="Go to Balance Screen"
          onPress={() => this.props.navigation.navigate("Balance")}
        />
      </View>
    );
  }
}
