import React, { useState } from 'react'
import { View, TextInput, Button, Text, StyleSheet } from 'react-native'
import Picker from 'react-native-picker-select'

const RegisterPage = ({ navigation }) => {
  return (
    <View>
      <TextInput placeholder="Name" />
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry={true} />
      <RNPickerSelect
        onValueChange={value => value}
        items={[
          {
            label: 'Masculino',
            value: 'Masculino',
            key: 'Masculino',
            inputLabel: 'inputLabel'
          },
          { label: 'Baseball', value: 'baseball' }
        ]}
      />
      <Button
        title="Register"
        onPress={() => navigation.navigate('FeedPage')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  radioButtonLabel: {
    marginLeft: 10,
    color: '#26110F' // Darkest color for text
  }
})

export default RegisterPage
