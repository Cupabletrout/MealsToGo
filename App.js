import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import RestaurantsScreen from "./src/screens/restaurant.screen";

export default function App() {
  return (
    <>
    <RestaurantsScreen />
    <ExpoStatusBar style="auto"/>
    </>
    
    );
}