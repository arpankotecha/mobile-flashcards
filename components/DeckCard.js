import React from 'react'
import { 
  View, 
  Text, 
  Platform, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native'

export default function DeckCard({ title, cardTotal }) {
  return (
    <View style={styles.card}>
      <TouchableOpacity>
        <Text style={{fontSize: 20}} >{title}</Text>
        <Text>{cardTotal} Cards</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
  }
})
