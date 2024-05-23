import React, { useState } from 'react'
import { View, TextInput, Button, Text, StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

const genderSelection = [
  {
    label: 'Masculino',
    value: 'Masculino',
    key: 'Masculino',
    inputLabel: 'Masculino'
  },
  {
    label: 'Feminino',
    value: 'Feminino',
    key: 'Feminino',
    inputLabel: 'Feminino'
  }
]

const RegisterPage = ({ navigation }) => {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.titleStyles}>Nome</Text>
      <View style={styles.textInput}>
        <TextInput placeholder="Name" />
      </View>

      <Text style={styles.titleStyles}>Email</Text>
      <View style={styles.textInput}>
        <TextInput placeholder="Email" />
      </View>

      <Text style={styles.titleStyles}>Senha</Text>
      <View style={styles.textInput}>
        <TextInput placeholder="Password" secureTextEntry={true} />
      </View>

      <Text style={styles.titleStyles}>Universidade</Text>
      <View style={styles.textInput}>
        <TextInput placeholder="University" />
      </View>

      <Text style={styles.titleStyles}>Genero</Text>
      <RNPickerSelect
        style={styles.textInput}
        onValueChange={value => value}
        items={genderSelection}
      />

      <Text style={styles.titleStyles}>Etinia</Text>
      <RNPickerSelect onValueChange={value => value} items={genderSelection} />

      <Text style={styles.titleStyles}>PCD</Text>
      <RNPickerSelect onValueChange={value => value} items={genderSelection} />

      <View style={styles.buttonsStyles}>
        <Button
          title="Register"
          onPress={() => navigation.navigate('FeedPage')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 6,
    paddingHorizontal: 16,
    backgroundColor: '#000000'
  },
  textInput: {
    borderWidth: 1,
    padding: 8,
    margin: 3,
    borderColor: '#453831',
    backgroundColor: '#E8DAB2',
    borderRadius: 6,
    width: '100%'
  },
  buttonsStyles: {
    justifyContent: 'center',
    elevation: 8,
    backgroundColor: '#453831',
    borderColor: '#666666',
    borderRadius: 6,
    paddingVertical: 1,
    paddingHorizontal: 12,
    borderWidth: 1,
    padding: 8,
    margin: 3,
    width: '100%'
  },
  titleStyles: {
    color: '#BFBFAA',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5
  }
})

export default RegisterPage
