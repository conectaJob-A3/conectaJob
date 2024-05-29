import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Image } from 'react-native'
import axios from 'axios'

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)

    try {
      // const response = await axios.post('YOUR_BACKEND_ROUTE_HERE', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   }
      // })
      navigation.navigate('FeedPage')
    } catch (error) {
      console.error(error.response.data)
    }
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require('./assets/main_logo.jpg')}
        ></Image>
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.textInput}>
          <TextInput inputMode="email" placeholder="Email" />
        </View>
        <View style={styles.textInput}>
          <TextInput placeholder="Password" secureTextEntry={true} />
        </View>
        <View style={styles.buttonsStyles}>
          <Button
            title="Login"
            color="#303841"
            // Send Login text inputs to the backend auth.
            onPress={handleSubmit}
          />
        </View>
        <View style={styles.buttonsStyles}>
          <Button
            title="Register"
            color="#303841"
            onPress={() => navigation.navigate('RegisterPage')}
          />
        </View>
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
  logoContainer: {},
  loginContainer: {
    alignContent: 'flex-end'
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
  logoImage: {
    width: '100%',
    height: 275,
    margin: 3,
    borderRadius: 6
  }
})

export default LoginPage
