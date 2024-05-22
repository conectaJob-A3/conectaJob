// FloatingButton.js
import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Image } from 'react-native'

const FloatingButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.floatingButton}>
      <Image
        source={require('./assets/menu_icon.png')}
        style={styles.buttonImage}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  floatingButton: {},
  buttonImage: {
    width: 50,
    height: 50
  }
})

export default FloatingButton
