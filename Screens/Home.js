import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import { Ionicons } from "@expo/vector-icons"; 


import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";
import PostsScreen from "./Main/PostsScreen";
import CreatePostsScreen from "./Main/CreatePostsScreen";


const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();


export const Home = () => {

    const isAuth = true;
    
    return (
      <NavigationContainer>
        {isAuth ? (
          <MainTab.Navigator>
            <MainTab.Screen
              name="Posts"
              component={PostsScreen}
              options={{
                tabBarShowLabel: false,
                tabBarStyle: { height: 80 },
                headerShown: false,
                tabBarIcon: ({ focused, color }) => (
                  <Ionicons
                    name="grid-outline"
                    size={24}
                    color="rgba(33, 33, 33, 0.8)"
                  />
                ),
              }}
            />
            <MainTab.Screen
              name="CreatePost"
              component={CreatePostsScreen}
              options={{
                tabBarShowLabel: false,
                tabBarStyle: { height: 80 },
                headerShown: false,
                tabBarIcon: ({ focused, color }) => (
                  <Ionicons
                    name="grid-outline"
                    size={24}
                    color="rgba(33, 33, 33, 0.8)"
                  />
                ),
              }}
            />
          </MainTab.Navigator>
        ) : (
          <MainStack.Navigator initialRouteName="Login">
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          </MainStack.Navigator>
        )}
      </NavigationContainer>
    );
    

}