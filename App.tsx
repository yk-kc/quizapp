import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/Home'
import QuizSelectScreen from './src/screens/QuizSelect'
import QuizJSScreen from './src/screens/QuizJS'
import type { HomeStackParamList } from './src/types/routes'

const Stack = createNativeStackNavigator<HomeStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen
          name='home'
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name='quiz/select'
          options={{
            headerTitle: 'クイズ選択',
            headerBackVisible: true,
            headerBackTitleVisible: false,
          }}
          component={QuizSelectScreen}
        />
        <Stack.Screen
          name='quiz/js'
          options={{
            headerTitle: 'JavaScript',
            headerBackVisible: true,
            headerBackTitleVisible: false,
          }}
          component={QuizJSScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
