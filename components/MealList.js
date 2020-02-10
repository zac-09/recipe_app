import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";
const MealList = props => {
  const renderMealItem = itemData => {
    return (
      <MealItem
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        duration={itemData.item.duration}
        title={itemData.item.title}
        onSelectMeal={() => {
          props.navigation.navigate({
            name: "MealDetail",
            params: {
              mealId: itemData.item.id
            }
          });
          console.log(itemData.item.id);
        }}
        image={itemData.item.imageUrl}
      />
    );
  };
  return (
    <View style={styles.List}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  List: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default MealList;
