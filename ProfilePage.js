import React from 'react'
import { View, Text, Button } from 'react-native'

const ProfilePage = ({ route }) => {
  const { user } = route.params

  return (
    <View>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
      <Button title="Edit" onPress={() => {}} />
    </View>
  )
}

export default ProfilePage
