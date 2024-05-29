import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import FloatingButton from './FloatingButton' // Adjust the import path as necessary

const FeedPage = ({ navigation }) => {
  // Pass navigation prop for routing

  const cards = [
    // Get info from MongoDB collection companies.
    {
      company: 'Google',
      name: 'Desenvolvedor Backend - Estagio (PCD)',
      description: `- Java \n- SQL \n- Git`,
      image:
        'https://steelbluemedia.com/wp-content/uploads/2019/06/new-google-favicon-512.png',
      id: 1 // Add unique ID for job routing
    },
    {
      name: 'Card 2',
      description: 'This is the second card.',
      image: 'https://example.com/image2.jpg',
      id: 2 // Add unique ID for job routing
    }
  ]

  const handleCardPress = card => {
    console.log(`FUNCIONOU!`)
    navigation.navigate('JobPage', { cardId: card.id })
  }

  const handleSwipeRight = async cardIndex => {
    const card = cards[cardIndex]

    try {
      // Implement your backend routing logic here (e.g., using fetch or Axios)
      const response = await fetch('your-backend-url/jobs/' + card.id, {
        method: 'POST' // Adjust method as needed (e.g., PUT)
      })

      if (response.ok) {
        // Handle successful routing (e.g., show success message)
        console.log('Job successfully routed to backend!')
      } else {
        // Handle routing errors
        console.error('Error routing job:', response.statusText)
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error routing job:', error)
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
