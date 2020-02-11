import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { MainScreen } from "./navigation/MealsNavigator";
import Colors from "./constants/Colors";
import { useScreens, enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createStore, combineReducers } from "redux";
import mealsReducer from "./store/meal";
import { Provider } from "react-redux";
enableScreens();
const rootReducer = combineReducers({
  meals: mealsReducer
});
const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-BoldItalic.ttf"),
    lato: require("./assets/fonts/Lato-Regular.ttf"),
    "lato-bold": require("./assets/fonts/Lato-BoldItalic.ttf")
  });
};
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainScreen />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
