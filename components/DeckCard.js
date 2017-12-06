import React from 'react'
import { 
  View, 
  Text, 
  Platform, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native'

export default function DeckCard({ navigation, title, cardTotal, questions}) {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate(
          'Deck',
          { title, cardTotal, questions }
        )}>
        <Text style={{fontSize: 20}} >{title}</Text>
        <Text>{cardTotal} Cards</Text>
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
