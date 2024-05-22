import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import FeedPage from './FeedPage'
import ProfilePage from './ProfilePage'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginPage"
        screenOptions={{
          headerShown: true, //? Set false to hide header, must ajust style of pages.
          gestureEnabled: false,
          headerTitle: 'conectaJob',
          headerTitleStyle: {
            color: '#FFC300'
          },
          headerStyle: { backgroundColor: '#000814' }
          // ,headerLeft: true //? Set false to hide backButton.
        }}
      >
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="FeedPage" component={FeedPage} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
