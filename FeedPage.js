import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import FloatingButton from './FloatingButton' 

const FeedPage = ({ navigation }) => {
  const handleCardPress = card => {
    console.log(`FUNCIONOU!`)
    navigation.navigate('JobPage', { cardId: card.id })
  }

  const handleSwipeRight = async cardIndex => {
    const card = cards[cardIndex]

    try {
      const response = await fetch(
        `${process.env.BACKEND_URL_GATEWAY}/job/` + card.id,
        {
          method: 'GET'
        }
      )
    } catch (error) {
      console.error(error)
      Alert.alert(
        'Error getting jobs!',
        error.response.data.message || 'An unknown error occurred.'
      )
    }
  }

  return (
    <View style={styles.container}>
      <Swiper
        cards={cards}
        renderCard={card => (
          <View style={styles.card} onPress={() => handleCardPress(card)}>
            <Image
              source={{ uri: card.image }}
              style={styles.cardImage}
              borderColor={'#303841'}
              borderWidth={3}
              borderRadius={10}
              backgroundColor={'#EEEEEE'}
            />
            <Text style={styles.cardText}>{card.company}</Text>
            <Text style={styles.cardText}>{card.name}</Text>
            <Text style={styles.cardText}>{card.description}</Text>
          </View>
        )}
        onSwipedRight={handleSwipeRight}
        onSwiped={cardIndex => console.log('Swiped:', cardIndex)}
        onSwipedAll={() => console.log('onSwipedAll')}
        onTapCard={() => navigation.navigate('JobPage')}
        cardIndex={0}
        backgroundColor={'#3A4750'}
        stackSize={4}
        verticalSwipe={false}
      >
        <View style={styles.swiperView}>
          <Text style={styles.swiperText}>Swipe me!</Text>
        </View>
      </Swiper>

      <View style={styles.menuButton}>
        <FloatingButton
          onPress={() => console.log('Floating button pressed')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303841'
  },
  card: {
    backgroundColor: '#EEEEEE',
    padding: 6,
    borderRadius: 10,
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardImage: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain'
  },
  cardText: {
    fontSize: 16,
    paddingVertical: 10
  },
  swiperView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  swiperText: {
    fontSize: 30,
    color: '#0D0D0D'
  },
  menuButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 50,
    left: Dimensions.get('window').width / 2 - 25 // Center the button horizontally
  }
})

export default FeedPage
