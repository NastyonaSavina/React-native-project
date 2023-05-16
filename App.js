import "react-native-gesture-handler";

import React from "react";
import { useFonts } from "expo-font";


import {Home} from "./Screens/Home"

export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-400": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-500": require("./assets/fonts/Nunito-Medium.ttf"),
    "Nunito-700": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
     <Home/>
    </>
  );
}



