import * as React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import Colors from "../constants/Colors";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FilterScreen from "../screens/FilterScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: Colors.primaryColor },
        headerTitleStyle: {
          fontFamily: "open-sans-bold"
        },
        headerBackTitleStyle: {
          fontFamily: "open-sans"
        }
      }}
    >
      <HomeStack.Screen name="Categories" component={CategoriesScreen} />
      <HomeStack.Screen name="CategoryMeals" component={CategoryMealScreen} />
      <HomeStack.Screen name="MealDetail" component={MealDetailScreen} />
    </HomeStack.Navigator>
  );
}
const favoritesNavigator = createStackNavigator();

function myfavoritesNavigator() {
  return (
    <favoritesNavigator.Navigator
      initialRouteName="favourites"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: Colors.primaryColor }
      }}
    >
      <favoritesNavigator.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
      />
      <favoritesNavigator.Screen
        name="MealDetail"
        component={MealDetailScreen}
      />
    </favoritesNavigator.Navigator>
  );
}
const filterStack = createStackNavigator();
function myfilterStack() {
  return (
    <filterStack.Navigator
      initialRouteName="filter"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: Colors.primaryColor }
      }}
    >
      <filterStack.Screen
        name="Filters"
        component={FilterScreen}
        options={{
          drawerLabel: "filter"
        }}
      />
    </filterStack.Navigator>
  );
}
const MainNavigator = createDrawerNavigator();

const bottom = createMaterialBottomTabNavigator();
function mybottom() {
  return (
    <bottom.Navigator activeColor="white" shifting={true}>
      <bottom.Screen
        name="categories"
        component={HomeStackScreen}
        options={{
          tabBarIcon: tabInfo => {
            return <Ionicons name="ios-restaurant" size={25} color="white" />;
          },
          tabBarColor: Colors.primaryColor,
          tabBarLabel: (
            <Text style={{ fontFamily: "nunito-bold" }}>categories</Text>
          )
        }}
      />
      <bottom.Screen
        name="favorites"
        component={myfavoritesNavigator}
        options={{
          tabBarIcon: tabInfo => {
            return <Ionicons name="ios-star" size={25} color="white" />;
          },
          tabBarColor: Colors.accentColor,
          tabBarLabel: (
            <Text style={{ fontFamily: "nunito-bold" }}>favorites</Text>
          )
        }}
      />
    </bottom.Navigator>
  );
}
export const MainScreen = () => {
  return (
    <MainNavigator.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.accentColor,
        labelStyle: {
          fontFamily: "lato-bold"
        }
      }}
    >
      <MainNavigator.Screen name="meals" component={mybottom} />
      <MainNavigator.Screen name="Filters" component={myfilterStack} />
    </MainNavigator.Navigator>
  );
};
