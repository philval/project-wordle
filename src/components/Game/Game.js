import React from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"
import GuessInput from "../GuessInput"
import GuessResults from "../GuessResults"

// Pick a random word on every pageload.
const answer = sample(WORDS)
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])

  function addGuess(guess) {
    const newGuess = { guess, id: crypto.randomUUID() }
    setGuesses([...guesses, newGuess])
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </>
  )
}

export default Game
