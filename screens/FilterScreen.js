import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const FilterSwitch = props => {
  return (
    <View style={styles.filterConatiner}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Colors.primaryColor}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};
const FilterScreen = props => {
  const [isGlutenFree, setIsGlutenfree] = useState(false);
  const [isLactoseFree, setIsLactosefree] = useState(false);
  const { navigation } = props;
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  // const saveFilters = useCallback(() => {
  //   const appliedFilters = {
  //     glutenFree: isGlutenFree,
  //     lactoseFree: isLactoseFree,
  //     vegan: isVegan,
  //     Vegeterian: isVegetarian
  //   };
  //   console.log(appliedFilters);
  // }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);
  // useEffect(() => {
  //   navigation.setParams({ save: saveFilters });
  // }, [saveFilters]);
  props.navigation.setOptions({
    title: "Filters",
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
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="save"
          iconName="ios-save"
          onPress={() => {
            // props.route.params.save;
          }}
        />
      </HeaderButtons>
    )
  });
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={newValue => setIsGlutenfree(newValue)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={newValue => setIsLactosefree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegeterian"
        state={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,

    alignItems: "center"
  },
  filterConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10
  },
  title: {
    fontFamily: "lato-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center"
  }
});
export default FilterScreen;
