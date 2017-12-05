import React from 'react'
import { View } from 'react-native'
import DeckCard from './DeckCard'

export default function DeckCardList({ decks }) {
  return (
    <View>
      {decks.map((deck, i) => (
        <DeckCard 
          title={deck.title} 
          cardTotal={deck.cardTotal} 
          key={i}/>
      ))}
    </View>
  )
}
