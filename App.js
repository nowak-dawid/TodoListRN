import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./components/HomeScreen";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Home"
              component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default MyStack