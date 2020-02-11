import React from "react";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";
import { View, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";

import MealList from "../components/MealList";
const CategoryMealScreen = props => {
  // const CatId = props.navigation.getParam("categoryId");
  const CatId = props.route.params.categoryId;
  const selectedCategory = CATEGORIES.find(cat => cat.id === CatId);
  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(CatId) >= 0
  );

  props.navigation.setOptions({
    title: selectedCategory.title
  });
  if (displayedMeals.length === 0) {
    return (
      <View style={styles.container}>
        <DefaultText>No meals found check filters</DefaultText>
      </View>
    );
  }
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};
CategoryMealScreen.setOptions = navigationData => {
  // const CatId = navigationData.navigation.getParam("categoryId");
  const CatId = props.route.categoryId;

  const selectedCategory = CATEGORIES.find(cat => cat.id === CatId);

  title: selectedCategory.title;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CategoryMealScreen;
