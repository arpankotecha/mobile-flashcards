import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Quiz({ 
  navigation
}) {
  const { questions } = navigation.state.params
  const cardNumber = 1
  const cardTotal = questions.length
  return (
    <View>
      <Text>{cardNumber}/{cardTotal}</Text>
      <Text>{questions[0].question}</Text>
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
