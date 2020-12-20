import React, { Component } from "react";
import {ScrollView, FlatList, StyleSheet, Text, View } from "react-native";

import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyBBqcAa_lefYrflv-O6uhBCz0si9WL8nq0",
  authDomain: "epicer-9caf5.firebaseapp.com",
  databaseURL: "https://epicer-9caf5.firebaseio.com/",
  storageBucket: "epicer-9caf5.appspot.com"
};
firebase.initializeApp(config);

//Get a reference to the database service
var database = firebase.database();
var data;

function getData(database){
  database.ref().child().once('value').then(function(snapshot){
    const exists = (snapshot.val() != null);
    if(exists) data = snapshot.val();

    console.log('value: ', data);
}).catch(error => console.log(error));
}

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

//acutal data
const real = getData(database);
// const re = [
//   {key: 'Devin', url : 'check'},
//   {key: 'Dan', url : 'check'},
//   {key: 'Dominic', url : 'check'},
//   {key: 'Jackson', url : 'check'},
//   {key: 'James', url : 'check'},
//   {key: 'Joel', url : 'check'},
//   {key: 'John', url : 'check'},
//   {key: 'Jillian', url : 'check'},
//   {key: 'Jimmy', url : 'check'},
//   {key: 'Julie', url : 'check'},
//   {key: 'evin', url : 'check'},
//   {key: 'an', url : 'check'},
//   {key: 'ominic', url : 'check'},
//   {key: 'ackson', url : 'check'},
//   {key: 'ames', url : 'check'},
//   {key: 'oel', url : 'check'},
//   {key: 'ohn', url : 'check'},
//   {key: 'illian', url : 'check'},
//   {key: 'immy', url : 'check'},
//   {key: 'ulie', url : 'check'},
// ]

class App extends Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.title}>Recipes you can make:</Text>
        </View>
        <FlatList
        data = {real}
        //data={re}
        renderItem={({item}) => <ScrollView> <Text style={styles.item}>{item.title} : <Link href = {item.url}>{item.url}</Link></Text> </ScrollView>}
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
    padding: 4,
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