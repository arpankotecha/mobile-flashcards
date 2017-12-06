export const NEW_DECK = 'NEW_DECK'
export const NEW_QUESTION = 'NEW_QUESTION'

export function newDeck(title) {
  return {
    type: NEW_DECK,
    title,
  }
}

export function newQuestion({ deckTitle, question, answer }){
  return {
    type: NEW_QUESTION,
    deckTitle,
    question,
    answer
  }
}
