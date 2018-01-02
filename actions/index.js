export const NEW_DECK = 'NEW_DECK'
export const NEW_QUESTION = 'NEW_QUESTION'

export function newDeck(title, questions=[]) {
  return {
    type: NEW_DECK,
    title,
    questions
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
