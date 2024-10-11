import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import WelcomeScreen from './Screens/WelcomeScreen';
import UserScreen from './Screens/UserScreen';

// const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#336b62'},
          headerTintColor: 'white',
          tabBarActiveTintColor : '#336b62'
          // drawerActiveBackgroundColor: '#b1d1cb',
          // drawerActiveTintColor: '#102925',
        }}>
        <BottomTab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size}></Icon>
            ),
          }}
          // options={{
          //   drawerLabel: 'Welcome Screen',
          //   drawerIcon: ({color, size}) => (
          //     <Icon name="home" color={color} size={size}></Icon>
          //   ),
          // }}
        />
        <BottomTab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="person" color={color} size={size}></Icon>
            ),
          }}
          // options={{
          //   drawerLabel: 'User Screen',
          //   drawerIcon: ({color, size}) => (
          //     <Icon name="person" color={color} size={size}></Icon>
          //   ),
          // }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
