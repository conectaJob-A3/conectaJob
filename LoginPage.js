import React from 'react'
import { View, TextInput, Button, StyleSheet, Image } from 'react-native'

const LoginPage = ({ navigation }) => {
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
          <TextInput placeholder="Email" />
        </View>
        <View style={styles.textInput}>
          <TextInput placeholder="Password" secureTextEntry={true} />
        </View>
        <View style={styles.buttonsStyles}>
          <Button
            title="Login"
            // Send Login text inputs to the backend auth.
            // Pass as a param in navigation.navitage('pageName', {params})
            onPress={() => navigation.navigate('FeedPage')}
          />
        </View>
        <View style={styles.buttonsStyles}>
          <Button
            title="Register"
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
    backgroundColor: '#000000'
  },
  logoContainer: {},
  loginContainer: {
    alignContent: 'flex-end'
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
  logoImage: {
    width: '100%',
    height: 275,
    margin: 3,
    borderRadius: 6
  }
})

export default LoginPage
