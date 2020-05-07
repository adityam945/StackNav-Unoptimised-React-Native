import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigatorDBScreens from './src/DashBoard/NavigatorDB/NavigatorDBScreens.js';
import { View, Container } from 'native-base';


const Stack = createStackNavigator();

function App() {
  return (<Container>
     <NavigatorDBScreens />
  </Container>
  );
}

export default App;