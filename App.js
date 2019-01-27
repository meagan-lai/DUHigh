import React from "react";
import { Button, View, Text } from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation"; // Version can be specified in package.json
import HomeScreen from "./src/screens/HomeScreen";
import FacialExpressionScreen from "./src/screens/FacialExpressionScreen";
import PupilScreen from "./src/screens/PupilScreen";
import PupilScreen2 from "./src/screens/PupilScreen2";
import BalanceScreen from "./src/screens/BalanceScreen";
import ResultsScreen from "./src/screens/ResultsScreen";
import TestScreen from "./src/screens/TestScreen";

const RootStack = createSwitchNavigator(
  {
    Home: HomeScreen,
    FacialExpression: FacialExpressionScreen,
    Pupil: PupilScreen,
    Pupil2: PupilScreen2,
    Balance: BalanceScreen,
    Results: ResultsScreen,
    Test: TestScreen
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
