import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import bottomHomeNavigator from './bottomHomeNavigator.routes';
import StoryScreen from "../screens/StoryScreen";

const RootStack = createStackNavigator();

const Router = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name={"Home"}
      component={bottomHomeNavigator}
      options={{
        headerShown: false
      }}
    />
    <RootStack.Screen
      name="Story"
      component={StoryScreen}
      options={{
        headerShown: false,
      }}
    />
  </RootStack.Navigator>
);

export default Router;
