import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ScreenStack from "./src/screenStack/ScreenStack";

const App = () => {
  return (
    <NavigationContainer>
        <ScreenStack/>
    </NavigationContainer>
  );
};

export default App;
