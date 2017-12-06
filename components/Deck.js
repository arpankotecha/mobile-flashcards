import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class Deck extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  })

  render() {
    const { title, cardTotal, questions } = this.props.navigation.state.params
    return (
      <View>
        <Text>{title}</Text>
        <Text>{cardTotal} cards</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(
            'NewQuestionCard'
          )}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(
            'Quiz',
            {questions}
          )}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
