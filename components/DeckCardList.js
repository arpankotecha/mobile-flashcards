import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import DeckCard from './DeckCard'

function DeckCardList({ navigation, decks }) {
  return (
    <View style={{flex:1}}>
      {decks.map((deck, i) => (
        <DeckCard 
          title={deck.title} 
          cardTotal={deck.questions.length} 
          questions={deck.questions}
          key={i}
          navigation={navigation}/>
      ))}
    </View>
  )
}

function mapStateToProps({decks}){
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckCardList)
