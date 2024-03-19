import React from 'react'
import {StyleSheet, Text, View, ImageBackground} from "react-native";
import answer from './customFunctions/answers'
import 'react-native-gesture-handler';
import Answer from './customFunctions/answers'

export default function App(){
  return (
      <ImageBackground source={require('./assets/images/background_menu.png')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.tasksWrapper}>
            <Text style={styles.selectionTitle}>Quiz 1</Text>
            <View style={styles.items}>
              <Answer text = {'Answer 1'} />
              <Answer text = {'Answer 2'} />
            </View>
          </View>
        </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  tasksWrapper:{
    padding: 80,
    paddingHorizontal: 20,

  },
  selectionTitle:{
    fontSize: 50,
    fontWeight: 'bold',
    color: '#F8E559',
  },
  items:{
    marginTop: 30,
  },
  backgroundImage:{
    flex: 1,
  }
});