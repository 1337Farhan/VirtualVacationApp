
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountriesScreen from './components/CountriesScreen';
import HomeScreen from './components/HomeScreen';
import VideoIframes from './components/VideoIframes';
const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown:false }}
          />
          <Stack.Screen
            name="CountriesScreen"
            component={CountriesScreen}
            options={{ headerShown:false }}
          />
          <Stack.Screen
            name="VideoIframes"
            component={VideoIframes}
            options={{ headerShown:false }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

