import React from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import Colors from "../constants/Colors";
import MealList from "../components/MealList";
const CategoryMealScreen = props => {
  // const CatId = props.navigation.getParam("categoryId");
  const CatId = props.route.params.categoryId;
  const selectedCategory = CATEGORIES.find(cat => cat.id === CatId);

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(CatId) >= 0
  );

  props.navigation.setOptions({
    title: selectedCategory.title
  });
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};
CategoryMealScreen.setOptions = navigationData => {
  // const CatId = navigationData.navigation.getParam("categoryId");
  const CatId = props.route.categoryId;

  const selectedCategory = CATEGORIES.find(cat => cat.id === CatId);

  title: selectedCategory.title;
};

export default CategoryMealScreen;
