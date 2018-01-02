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
import { newDeck } from './actions'
import { setLocalNotification } from './utils/helpers'
import { getDecks, clear } from './utils/api'

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
      tabBarLabel: 'NEW DECK',
    },
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: 'black',
    style: {
      height: 56,
      backgroundColor: 'black',
      shadowColor: 'rgba(0,0,0,0.24)',
      shadowRadius: 6,
      shadowOpacity: 1,
      justifyContent: 'center',
      shadowOffset: {
        width: 0,
        height: 3
      },
    },
    labelStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      justifyContent: 'center',
      padding: 10,
      color: 'white'
    }
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
  constructor() {
    super()
    this.store = createStore(reducer)
  }

  componentDidMount() {
    setLocalNotification()
    getDecks()
      .then(res => {
        res.forEach(d => {
          this.store.dispatch(newDeck(d['title'], d['questions']))
        })
      })
  }

  render() {
    return (
      <Provider store={this.store}>
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
