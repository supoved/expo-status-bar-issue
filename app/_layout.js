import { Slot, Stack } from 'expo-router';
import {View, StyleSheet} from 'react-native';
import { KeyboardProvider } from "react-native-keyboard-controller";

export default function Index() {

    return <KeyboardProvider><Stack
    initialRouteName="white"
    screenOptions={{
      headerShown: false,
      navigationBarColor: "white",
    }}
  ></Stack></KeyboardProvider>

  ;
}