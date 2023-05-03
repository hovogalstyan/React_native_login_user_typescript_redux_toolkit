import React, { FC } from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import Home from "./Home";
import SliderHome from "./SliderHome";
import { NavigationProp } from "@react-navigation/native";
import Login from "./Login";
import Register from "./Register";
import ForgetPasswordEmailChange from "./ForgetPasswordEmailChange";

export type ScreenNames = ["Home", "SlidHome", "Login", "Register", "ForgetPasswordChangeEmail"] // type these manually
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;
const Stack = createStackNavigator<RootStackParamList>();
const ScreenStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}>
      <Stack.Screen
        name={"Home"}
        component={Home} />
      <Stack.Screen
        name={"SlidHome"}
        component={SliderHome} />
      <Stack.Screen
        name={"Login"}
        component={Login} />
      <Stack.Screen
        name={"Register"}
        component={Register} />
      <Stack.Screen
        name={"ForgetPasswordChangeEmail"}
        component={ForgetPasswordEmailChange} />
    </Stack.Navigator>
  );
};

export default ScreenStack;
