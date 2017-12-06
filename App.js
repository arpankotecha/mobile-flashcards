import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import DeckCardList from './components/DeckCardList'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import NewDeck from './components/NewDeck'
import NewQuestionCard from './components/NewQuestionCard'
import { TabNavigator, StackNavigator } from 'react-navigation'
import reducer from './reducers'

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
    return (
      <Provider store={createStore(reducer)}>
        <MainNavigator />
      </Provider>
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
