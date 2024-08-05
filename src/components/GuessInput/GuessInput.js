import React from "react"

function GuessInput({ addGuess }) {
  const [guess, setGuess] = React.useState("")

  function handleChange(event) {
    setGuess(event.target.value.toUpperCase())
  }

  function handleSubmit(event) {
    event.preventDefault()
    addGuess(guess)
    setGuess("")
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        size={5}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        value={guess}
        onChange={handleChange}
        title="5 letter word only"
      />
    </form>
  )
}

export default GuessInput
