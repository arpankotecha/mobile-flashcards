import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DeckCardList from './components/DeckCardList'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import NewDeck from './components/NewDeck'
import NewQuestionCard from './components/NewQuestionCard'

export default class App extends React.Component {
  render() {
    const decks = [
      {
        title: "Deck 1",
        cardTotal: 3,
        questions: [
          {
            question: 'Deck 1 Question 1',
            answer: 'Deck 1 answer 1'
          },
          {
            question: 'Deck 1 Question 2',
            answer: 'Deck 1 answer 2'
          },
          {
            question: 'Deck 1 Question 3',
            answer: 'Deck 1 answer 3'
          }
        ]
      },
      {
        title: "Deck 2",
        cardTotal: 4,
        questions: [
          {
            question: 'Deck 2 Question 1',
            answer: 'Deck 2 answer 1'
          },
          {
            question: 'Deck 2 Question 2',
            answer: 'Deck 2 answer 2'
          },
          {
            question: 'Deck 2 Question 3',
            answer: 'Deck 2 answer 3'
          }
        ]
      },
      {
        title: "Deck 3",
        cardTotal: 5,
        questions: [
          {
            question: 'Deck 3 Question 1',
            answer: 'Deck 3 answer 1'
          },
          {
            question: 'Deck 3 Question 2',
            answer: 'Deck 3 answer 2'
          },
          {
            question: 'Deck 3 Question 3',
            answer: 'Deck 3 answer 3'
          }
        ]
      }
    ]
    return (
      <View style={styles.container}>
        {/* 
        <DeckCardList decks={decks} /> 
        */}
        {/* 
        <Deck title={decks[0].title} cardTotal={decks[0].cardTotal}/> 
        */}
        {/*
        <Quiz
          question={decks[0].questions[0].question}
          answer={decks[0].questions[0].answer} 
          cardNumber={1}
          cardTotal={3}
        />
        */}
        <NewDeck />
        {/*
        <NewQuestionCard />
        */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
