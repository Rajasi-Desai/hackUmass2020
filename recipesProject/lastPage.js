import React, { Component } from "react";
import {ScrollView, FlatList, StyleSheet, Text, View } from "react-native";

const Link = props => (
  <Text
    {...props}
    accessibilityRole="link"
    style={StyleSheet.compose(
      styles.link,
      props.style
    )}
  />
);

const re = [
  {title: 'Healthy Apple Pancakes', url : 'https://www.bigoven.com/recipe/healthy-apple-pancakes/41059'},
  {title: 'Applesauce Oatmeal Muffins (Healthy Exchanges)', url : 'https://www.bigoven.com/recipe/applesauce-oatmeal-muffins-healthy-exchanges/153304'},
  {title: 'Double Chocolate Irish Tea Infused Oat Muffins', url : 'https://www.bigoven.com/recipe/double-chocolate-irish-tea-infused-oat-muffins/1542254'},
  {title: 'Blueberry Oatmeal Pancakes', url : 'https://www.bigoven.com/recipe/blueberry-oatmeal-pancakes/169473'},
  {title: 'Tempeh and Eggplant Pot Pies', url : 'https://www.bigoven.com/recipe/tempeh-and-eggplant-pot-pies/599917'},
  {title: 'Chocolate Chip-Oatmeal Cookies', url : 'https://www.bigoven.com/recipe/chocolate-chip-oatmeal-cookies'},
  {title: 'Chunky Butter Christmas Cookies', url : '"https://www.bigoven.com/recipe/chunky-butter-christmas-cookies/69495'},
  {title: 'Italian Meatball Tortes', url : 'https://www.bigoven.com/recipe/italian-meatball-tortes/449392'},
  {title: 'Not Your Moms Oatmeal Cookies', url : '"https://www.bigoven.com/recipe/not-your-moms-oatmeal-cookies/756758'},
  {title: 'Morning Glory Muffins (6)', url : 'https://www.bigoven.com/recipe/morning-glory-muffins-6/180434'},
  {title: 'Oat Scones', url : 'https://www.bigoven.com/recipe/oat-scones/453377'}, 
]

class App extends Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.title}>Recipes you can make:</Text>
        </View>
        <FlatList
        data={re}
        renderItem={({item}) =>  <Text style={styles.item}>{item.title} : <Link href = {item.url}>{item.url}</Link></Text>}
      />
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  header: {
    padding: 10
  },
  item: {
    padding: 40,
    fontSize: 16,
    height: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: "30px",
    marginVertical: "10px",
    textAlign: "center"
  },
});

export default App;