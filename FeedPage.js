import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import FloatingButton from './FloatingButton' // Adjust the import path as necessary

const FeedPage = () => {
  const cards = [
    //? Get info from MongoDB collection companies.
    {
      company: 'Google',
      name: 'Desenvolvedor Backend - Estagio (PCD)',
      description: `- Java \n- SQL \n- Git`,
      image:
        'https://steelbluemedia.com/wp-content/uploads/2019/06/new-google-favicon-512.png'
    },
    {
      name: 'Card 2',
      description: 'This is the second card.',
      image: 'https://example.com/image2.jpg'
    }
  ]

  return (
    <View style={styles.container}>
      <Swiper
        cards={cards}
        renderCard={card => (
          <View style={styles.card}>
            <Image
              source={{ uri: card.image }}
              style={styles.cardImage}
              borderColor={'#26110F'}
              borderWidth={3}
              borderRadius={10}
              backgroundColor={'#BFBFAA'}
            />
            <Text style={styles.cardText}>{card.company}</Text>
            <Text style={styles.cardText}>{card.name}</Text>
            <Text style={styles.cardText}>{card.description}</Text>
          </View>
        )}
        onSwiped={cardIndex => console.log(cardIndex)}
        onSwipedAll={() => console.log('onSwipedAll')}
        cardIndex={0}
        backgroundColor={'#BF8845'}
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
    backgroundColor: '#0D0D0D'
  },
  card: {
    backgroundColor: '#8C582A',
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
