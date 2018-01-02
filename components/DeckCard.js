import React from 'react'
import { 
  View, 
  Text, 
  Platform, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native'

export default function DeckCard({ navigation, title, questions}) {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate(
          'Deck',
          { title, questions }
        )}>
        <Text style={styles.deckTitle} >{title}</Text>
        <Text style={{textAlign: 'center'}}>
          {questions.length} Cards
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 16,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    flex: 1
  },
  deckTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
