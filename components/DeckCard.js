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
        <Text style={{fontSize: 20}} >{title}</Text>
        <Text>{questions.length} Cards</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    flex: 1
  }
})
