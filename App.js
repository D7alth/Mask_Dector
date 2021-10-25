import React,  {useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {View, Text} from 'react-native';
import scrStart from './screens/scrStart';
import scrMain from './screens/scrMain';
import scrCam from './screens/scrCam';
import { Camera } from 'expo-camera'; 

const Stack = createStackNavigator();

function MyStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={scrStart}/>
      <Stack.Screen name="Main" component={scrMain}/>
      <Stack.Screen name="Cam" component={scrCam}/>
    </Stack.Navigator>
  )
}

export default function App(){
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )


};