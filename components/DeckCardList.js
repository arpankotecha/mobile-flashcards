import React from 'react'
import { View } from 'react-native'
import DeckCard from './DeckCard'

export default function DeckCardList({ navigation, screenProps }) {
  return (
    <View style={{flex:1}}>
      {screenProps.decks.map((deck, i) => (
        <DeckCard 
          title={deck.title} 
          cardTotal={deck.cardTotal} 
          questions={deck.questions}
          key={i}
          navigation={navigation}/>
      ))}
    </View>
  )
}
