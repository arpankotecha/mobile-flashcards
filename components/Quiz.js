import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { setLocalNotification } from '../utils/helpers'

export default class Quiz extends Component {
  state = {
    currentCard: 0,
    showAnswer: false,
    correct: 0
  }

  correct = () => {
    this.setState(state => ({
      currentCard: state.currentCard + 1,
      showAnswer: false,
      correct: state.correct + 1
    }))
  }

  incorrect = () => {
    this.setState(state => ({
      currentCard: state.currentCard + 1,
      showAnswer: false
    }))
  }

  toggleAnswer = () => {
    this.setState(state => ({
      showAnswer: ! state.showAnswer
    }))
  }

  render() {
    const { title, questions } = this.props.navigation.state.params
    const cardNumber = this.state.currentCard
    const cardTotal = questions.length

    if (cardNumber >= cardTotal) {
      const pct = parseInt(this.state.correct / cardTotal * 100);
      setLocalNotification()
      return (
        <View style={styles.results}>
          <Text style={[styles.question, {marginBottom: 100}]}>
            Quiz Score: {pct}%
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate(
              'Quiz',
              {questions}
            )}>
            <Text style={{fontWeight: 'bold'}}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate(
              'Deck',
              {title, questions}
            )}>
            <Text style={{fontWeight: 'bold'}}>Back To Deck</Text>
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <View style={{padding:20}}>
        <Text style={{fontSize: 14}}>{cardNumber+1}/{cardTotal}</Text>
        <Text style={styles.question}>
          {questions[cardNumber].question}
        </Text>
        { this.state.showAnswer && 
            <Text style={styles.answer}>
              {questions[cardNumber].answer}
            </Text>
        }
        <TouchableOpacity
          onPress={this.toggleAnswer}>
          <Text style={styles.answerButton}>
            Answer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'green'}]}
          onPress={this.correct}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            Correct
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'red'}]}
          onPress={this.incorrect}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            Incorrect
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  question: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  answer: {
    fontSize: 22,
    textAlign: 'center',
  },
  results: {
    alignItems: 'center',
  },
  answerButton: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    marginTop: 50,
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
