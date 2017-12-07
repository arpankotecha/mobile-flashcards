import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  })

  render() {
    const { title, questions } = this.props
    return (
      <View>
        <Text>{title}</Text>
        <Text>{questions.length} cards</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(
            'NewQuestionCard',
            { title }
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

function mapStateToProps({ decks }, props){
  const { title } = props.navigation.state.params
  const deck = decks.filter(d => (d.title === title))[0]

  return {
    title: deck.title,
    questions: deck.questions
  }
}

export default connect(mapStateToProps)(Deck)
