import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Result from './src/Result';
import Calculator from './src/Calculator'
import main from './src/main'


const AppNavigator = createStackNavigator({
  
  Home: {
    screen: main
    },
  Result:{
    screen:Result
  },
  Calculator:{
    screen:Calculator
  }

  },{
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);