import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Quiz({ 
  question, 
  answer, 
  cardNumber, 
  cardTotal 
}) {
  return (
    <View>
      <Text>{cardNumber}/{cardTotal}</Text>
      <Text>question</Text>
      <TouchableOpacity>
        <Text>
          Answer
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>
          Correct
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>
          Incorrect
        </Text>
      </TouchableOpacity>
    </View>
  )
}
