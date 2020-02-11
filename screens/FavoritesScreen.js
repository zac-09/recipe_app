import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
const FavoritesScreen = props => {
  props.navigation.setOptions({
    title: "Your Favourites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  });
  const favMeals = useSelector(state => state.meals.favoriteMeals);
  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>
          No favorite meals found start adding some my nigga
        </DefaultText>
      </View>
    );
  } else {
    return <MealList listData={favMeals} navigation={props.navigation} />;
  }
};
const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default FavoritesScreen;
