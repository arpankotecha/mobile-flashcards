import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  })

  render() {
    const { title, questions } = this.props
    return (
      <View>
        <Text style={styles.deckTitle}>{title}</Text>
        <Text style={styles.cardCount}>{questions.length} cards</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate(
            'NewQuestionCard',
            { title }
          )}>
          <Text style={{fontWeight: 'bold'}}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate(
            'Quiz',
            {title, questions}
          )}>
          <Text style={{fontWeight: 'bold'}}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deckTitle: {
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 100,
    fontSize: 50,
    fontWeight: 'bold'
  },
  cardCount: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 30,
    marginBottom: 200,
    color: 'gray',
    fontWeight: 'bold',
  },
  button: {
    padding: 20,
    alignItems: 'center',
    borderRadius: 7,
    borderWidth: 1,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 5,
  }
})

function mapStateToProps({ decks }, props){
  const { title } = props.navigation.state.params
  const deck = decks.filter(d => (d.title === title))[0]

  return {
    title: deck.title,
    questions: deck.questions
  }
}

export default connect(mapStateToProps)(Deck)
