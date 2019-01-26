import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation"; // Version can be specified in package.json
import HomeScreen from "./src/screens/HomeScreen";
import FacialExpressionScreen from "./src/screens/FacialExpressionScreen";
import PupilScreen from "./src/screens/PupilScreen";
import BalanceScreen from "./src/screens/BalanceScreen";
import ResultsScreen from "./src/screens/ResultsScreen";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    FacialExpression: FacialExpressionScreen,
    Pupil: PupilScreen,
    Balance: BalanceScreen,
    Results: ResultsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
