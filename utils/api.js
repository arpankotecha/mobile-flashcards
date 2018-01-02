import { AsyncStorage } from 'react-native'

export const FLASHCARDS_STORAGE_KEY = 'FlashCards:FlashCards'

export function getDecks() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(results => {
      return results === null
        ? []
        : JSON.parse(results)["decks"]
    })
}

export function addNewDeck( title ) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(results => {
      const decks = results === null
        ? []
        : JSON.parse(results)["decks"]
      decks.push({title, questions: []})
      return AsyncStorage.setItem(
        FLASHCARDS_STORAGE_KEY, 
        JSON.stringify({decks})
      )
    })
}

export function addNewQuestion( title, question, answer ) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(results => {
      const decks = JSON.parse(results)["decks"]
      decks.filter(d => d.title == title)[0]['questions'].push({
        question,
        answer
      })
      return AsyncStorage.setItem(
        FLASHCARDS_STORAGE_KEY,
        JSON.stringify({decks}))
    })
}

export function clear() {
  return AsyncStorage.clear()
}
