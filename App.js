import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/components/HomeScreen';
import IdeaScreen from './src/components/IdeaScreen';
import Header from './src/components/Header';
import InfluencerScreen from './src/components/InfluencerScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Fragment } from 'react';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const MainSectionTab = ({navigation}) => {
  return(
    <Fragment>
      <Header navigation="Header"/>
      <Tab.Navigator  tabBarOptions={{
          style:{backgroundColor:"#171717"},
          activeTintColor:"#EE4953",
          inactiveTintColor:"white",
          labelStyle: { fontSize: 20, fontWeight: '400'},
          indicatorStyle: { backgroundColor: '#EE4953', width: 70, height: 3, marginLeft: 25 },
        }}>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Idea" component={IdeaScreen}/>
        <Tab.Screen name="Influencer" component={InfluencerScreen}/>
      </Tab.Navigator>
    </Fragment>
  )
}
export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="MainSectionTab" component={MainSectionTab} options={{headerShown:false}}/>
     </Stack.Navigator>
   </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
