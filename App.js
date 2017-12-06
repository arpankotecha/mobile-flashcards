import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DeckCardList from './components/DeckCardList'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import NewDeck from './components/NewDeck'
import NewQuestionCard from './components/NewQuestionCard'
import { TabNavigator, StackNavigator } from 'react-navigation'

const Tabs = TabNavigator({
  Decks: {
    screen: DeckCardList,
    navigationOptions: {
      tabBarLabel: 'DECKS'
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECK'
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: 'black',
    style: {
      height: 56,
      backgroundColor: 'pink',
      shadowColor: 'rgba(0,0,0,0.24)',
      shadowRadius: 6,
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: 3
      },
    },
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  Deck: {
    screen: Deck
  },
  Quiz: {
    screen: Quiz
  },
  NewQuestionCard: {
    screen: NewQuestionCard
  }
})

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
        <MainNavigator screenProps={{decks}}/>
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
