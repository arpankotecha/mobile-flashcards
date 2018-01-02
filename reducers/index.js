import { combineReducers } from 'redux'
import { NEW_DECK } from '../actions'
import { NEW_QUESTION } from '../actions'

  /*
const defaultDecks = [
  {
    title: "Deck 1",
    questions: [
      {
        question: 'Deck 1 Question 1',
        answer: 'Deck 1 answer 1'
      },
      {
        question: 'Deck 1 Question 2',
        answer: 'Deck 1 answer 2'
      },
    ]
  },
  {
    title: "Deck 2",
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
*/

function decks(state=[], action) {
  switch (action.type){
    case NEW_DECK:
      return [
        ...state,
        {
          title: action.title,
          cardTotal: action.questions.length,
          questions: action.questions
        }
      ]
    case NEW_QUESTION:
      s = state.map(deck => (
        deck.title === action.deckTitle
          ? {
              ...deck,
              questions: [
                ...deck.questions, 
                {question: action.question, answer: action.answer}
              ],
            }
          : deck
      ))
      console.log(s)
      return s
    default:
      return state
  }
}

export default combineReducers({
  decks,
})
