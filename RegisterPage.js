import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import axios from 'axios'

const genres = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Non-binary', value: 'non-binary' }
  // Add more genres as needed
]

const ethnicities = [
  { label: 'Asian', value: 'asian' },
  { label: 'Black/African American', value: 'black' },
  { label: 'Hispanic/Latino', value: 'hispanic' },
  { label: 'Indigenous American/Alaska Native', value: 'indigenous' },
  { label: 'Middle Eastern', value: 'middle_eastern' },
  {
    label: 'Native Hawaiian/Other Pacific Islander',
    value: 'pacific_islander'
  },
  { label: 'White', value: 'white' }
  // Add more ethnicities as needed
]

const pcds = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' }
  // Add more PCD options as needed
]

const RegisterPage = ({ navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [university, setUniversity] = useState('')
  const [genre, setGenre] = useState('')
  const [ethnicity, setEthnicity] = useState('')
  const [pcd, setPcd] = useState('')

  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('university', university)
    formData.append('genre', genre)
    formData.append('ethnicity', ethnicity)
    formData.append('pcd', pcd)

    try {
      const response = await axios.post('YOUR_BACKEND_ROUTE_HERE', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      navigation.navigate('FeedPage')
    } catch (error) {
      console.error(error.response.data)
    }
  }

  return (
    <View style={styles.appContainer}>
      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.textInput}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.textInput}
      />
      <TextInput
        placeholder="Universidade"
        value={university}
        onChangeText={setUniversity}
        style={styles.textInput}
      />
      <RNPickerSelect
        onValueChange={value => setGenre(value)}
        items={genres}
        style={pickerSelectStyles}
        placeholder={{ label: 'Genero', value: null }}
      />
      <RNPickerSelect
        onValueChange={value => setEthnicity(value)}
        items={ethnicities}
        style={pickerSelectStyles}
        placeholder={{ label: 'Etinia', value: null }}
      />
      <RNPickerSelect
        onValueChange={value => setPcd(value)}
        items={pcds}
        style={pickerSelectStyles}
        placeholder={{ label: 'PCD', value: null }}
      />
      <View style={styles.buttonsStyles}>
        <Button title="Registrar" onPress={handleSubmit} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 6,
    paddingHorizontal: 16,
    backgroundColor: '#303841'
  },
  textInput: {
    borderWidth: 1,
    padding: 8,
    margin: 3,
    borderColor: '#393E46',
    backgroundColor: '#EEEEEE',
    borderRadius: 6,
    width: '100%'
  },
  buttonsStyles: {
    justifyContent: 'center',
    elevation: 8,
    backgroundColor: '#00ADB5',
    borderColor: '#EEEEEE',
    borderRadius: 6,
    paddingVertical: 1,
    paddingHorizontal: 12,
    borderWidth: 1,
    padding: 8,
    margin: 3,
    width: '100%'
  },
  titleStyles: {
    color: '#EEEEEE',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5
  }
})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    padding: 8,
    borderWidth: 1,
    margin: 3,
    borderColor: '#393E46',
    borderRadius: 6,
    backgroundColor: '#EEEEEE',
    width: '100%'
  },
  inputAndroid: {
    padding: 8,
    borderWidth: 1,
    margin: 3,
    borderColor: '#393E46',
    borderRadius: 6,
    backgroundColor: '#EEEEEE',
    width: '100%'
  }
})

export default RegisterPage
