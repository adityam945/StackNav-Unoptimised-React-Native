import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen.js';
import SyllabusScreen from '../Screens/SyllabusScreens.js';
import SMaterialScreen from '../Screens/SMaterialScreen.js';
import QPaperScreen from '../Screens/QPaperScreen.js';
import OthersScreen from '../Screens/OthersScreen.js';
import Sem3 from '../Screens/Syllabus/Sem3.js';
import Sem4 from '../Screens/Syllabus/Sem4.js';
import Sem5 from '../Screens/Syllabus/Sem5.js';
import Sem6 from '../Screens/Syllabus/Sem6.js';
import Sem7 from '../Screens/Syllabus/Sem7.js';
import Sem8 from '../Screens/Syllabus/Sem8.js';
import Sem3SM from '../Screens/StudyMaterial/Sem3SM.js';
import Sem4SM from '../Screens/StudyMaterial/Sem4SM.js';
import Sem5SM from '../Screens/StudyMaterial/Sem5SM.js';
import Sem6SM from '../Screens/StudyMaterial/Sem6SM.js';
import Sem7SM from '../Screens/StudyMaterial/Sem7SM.js';
import Sem8SM from '../Screens/StudyMaterial/Sem8SM.js';
import Sem3QP from '../Screens/QPaper/Sem3QP.js';
import Sem4QP from '../Screens/QPaper/Sem4QP.js';
import Sem5QP from '../Screens/QPaper/Sem5QP.js';
import Sem6QP from '../Screens/QPaper/Sem6QP.js';
import Sem7QP from '../Screens/QPaper/Sem7QP.js';
import Sem8QP from '../Screens/QPaper/Sem8QP.js';




const Stack = createStackNavigator();

function NavigatorDBScreens() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="screen" screenOptions={{
        headerTintColor: 'black',
        headerStyle: { backgroundColor: '#38ba5b' },
      }}>
        <Stack.Screen name="Home" component={HomeScreen}  options={{title: 'DashBoard', headerTitleAlign: 'center'}} />
        <Stack.Screen name="Syllabus" component={SyllabusScreen} options={{title: 'Syllabus', headerTitleAlign: 'center'}} />
        <Stack.Screen name="SMaterail" component={SMaterialScreen} options={{title: 'Study Materials', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="QPaper" component={QPaperScreen} options={{title: 'Question Papers', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Others" component={OthersScreen} options={{title: 'Others', headerTitleAlign: 'center'}}/>

        <Stack.Screen name="Sem3"  component={Sem3} options={{title: 'Syllubus- Sem 3', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Sem4"  component={Sem4} options={{title: 'Syllubus- Sem 4', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Sem5"  component={Sem5} options={{title: 'Syllubus- Sem 5', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Sem6"  component={Sem6} options={{title: 'Syllubus- Sem 6', headerTitleAlign: 'center'} }/>
        <Stack.Screen name="Sem7"  component={Sem7} options={{title: 'Syllubus- Sem 7', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Sem8"  component={Sem8} options={{title: 'Syllubus- Sem 8', headerTitleAlign: 'center'}}/>

        <Stack.Screen name="Sem3SM"  component={Sem3SM} options={{title: 'Study Materials- Sem 3', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Sem4SM"  component={Sem4SM} options={{title: 'Study Materials- Sem 4', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Sem5SM"  component={Sem5SM} options={{title: 'Study Materials- Sem 5', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Sem6SM"  component={Sem6SM} options={{title: 'Study Materials- Sem 6', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Sem7SM"  component={Sem7SM} options={{title: 'Study Materials- Sem 7', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Sem8SM"  component={Sem8SM} options={{title: 'Study Materials- Sem 8', headerTitleAlign: 'center'}}/>

        <Stack.Screen name="Sem3QP"  component={Sem3QP} options={{title: 'Question Papers- Sem 3', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Sem4QP"  component={Sem4QP} options={{title: 'Question Papers- Sem 4', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Sem5QP"  component={Sem5QP} options={{title: 'Question Papers- Sem 5', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Sem6QP"  component={Sem6QP} options={{title: 'Question Papers- Sem 6', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Sem7QP"  component={Sem7QP} options={{title: 'Question Papers- Sem 7', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Sem8QP"  component={Sem8QP} options={{title: 'Question Papers- Sem 8', headerTitleAlign: 'center'}}/>

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigatorDBScreens;