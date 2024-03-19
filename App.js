import React from 'react'
import {StyleSheet, Text, View, ImageBackground} from "react-native";
import Option from './Components/tasks'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import TagScreen from "./customScreens/TagScreen";

const Stack = createStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
          }}
      >
        <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Awesome app',
            }}
        />
        <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              title: 'My profile',
            }}
        />
        <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              gestureEnabled: false,
            }}
        />
      </Stack.Navigator>
  );
}

export default function App(){
  return (
      <ImageBackground source={require('./background_quest.png')} style={styles.backgroundImage} >
        <View style={styles.container}>
          <View style={styles.tasksWrapper}>
            <Text style={styles.selectionTitle}>Settings</Text>
            <View style={styles.items}>
              <Option text = {'Setting 1'} />
              <Option text = {'Setting 2'} />
              <Option text = {'Setting 3'} />
              <Option text = {'Setting 4'} />
              <Option text = {'Setting 5'} />
              <Option text = {'Setting 6'} />
              <Option text = {'Setting 7'} />
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