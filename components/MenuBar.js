import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '../NavigationContext'

const MenuBar = () => {
  const navigation = useNavigation()
  const state = navigation?.getState()

  const [activeTab, setActiveTab] = useState(state?.routeName)

  const handlePress = routeName => {
    setActiveTab(routeName)
    navigation.navigate(routeName)
  }
  return (
    <View style={styles.tabBar}>
      {state?.routes.map(route => (
        <TouchableOpacity
          key={route.key}
          onPress={() => handlePress(route.name)}
          style={styles.tabButton}
        >
          <MaterialCommunityIcons
            name={
              route.name === activeTab
                ? route.title === 'LoginPage'
                  ? 'home-active'
                  : route.title === 'Search'
                  ? 'magnify-zoom-active'
                  : route.title === 'Profile'
                  ? 'account-circle-active'
                  : 'settings-gears-active'
                : route.title === 'Home'
                ? 'home'
                : route.title === 'Search'
                ? 'magnify-zoom'
                : route.title === 'Profile'
                ? 'account-circle'
                : 'settings-gears'
            }
            size={24}
            color={route.name === activeTab ? '#007bff' : '#808080'}
          />
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  tabButton: {
    flex: 1,
    alignItems: 'center'
  }
})

export default MenuBar
