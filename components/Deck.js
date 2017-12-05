import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Deck({ title, cardTotal }) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{cardTotal} cards</Text>
      <TouchableOpacity>
        <Text>Add Card</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  )
}
