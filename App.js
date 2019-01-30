import React from "react";
import { Button, View, Text } from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation"; // Version can be specified in package.json
import HomeScreen from "./src/screens/HomeScreen";
import FacialExpressionScreen from "./src/screens/FacialExpressionScreen";
import PupilScreen from "./src/screens/PupilScreen";
import PupilScreen2 from "./src/screens/PupilScreen2";
import BalanceScreen from "./src/screens/BalanceScreen";
import ResultsScreen from "./src/screens/ResultsScreen";
import ResultsScreenHigh from "./src/screens/ResultsScreenHigh";
import TestScreen from "./src/screens/TestScreen";
import Instructions1 from "./src/screens/Instructions1";
import Instructions2 from "./src/screens/Instructions2";
import Instructions3 from "./src/screens/Instructions3";

const RootStack = createSwitchNavigator(
  {
    Home: HomeScreen,
    ExpressionInstructions: Instructions1,
    FacialExpression: FacialExpressionScreen,
    PupilInstructions: Instructions2,
    Pupil: PupilScreen,
    Pupil2: PupilScreen2,
    BalanceInstructions: Instructions3,
    Balance: BalanceScreen,
    Results: ResultsScreen,
    ResultsHigh: ResultsScreenHigh,
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
