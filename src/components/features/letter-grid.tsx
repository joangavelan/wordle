import * as React from 'react'
import { LetterGridRow } from './letter-grid-row'

export const LetterGrid = () => {
  const [correctWord, setCorrectWord] = React.useState('state')
  const [guessedWords, setGuessedWords] = React.useState(Array(5).fill(null))
  const [currentWord, setCurrentWord] = React.useState('')
  const [isGameOver, setIsGameOver] = React.useState(false)

  const evaluateCurrentWord = () => {
    if (currentWord.length === 5) {
      const newGuessedWords = [...guessedWords]
      newGuessedWords[guessedWords.findIndex((val) => val == null)] = currentWord
      setGuessedWords(newGuessedWords)
      setCurrentWord('')
    }
  }

  const removeLetterFromCurrentWord = () => {
    if (currentWord.length === 0) return
    setCurrentWord(currentWord.slice(0, -1))
  }

  const addNewLetterToCurrentWord = (key: string) => {
    if (currentWord.length >= 5) return
    setCurrentWord((word) => word + key)
  }

  React.useEffect(() => {
    const handleType = (event: KeyboardEvent) => {
      const { key } = event

      if (isGameOver) {
        return
      }
      if (/^[a-zñ]+$/.test(key)) {
        addNewLetterToCurrentWord(key)
      }
      if (key === 'Backspace') {
        removeLetterFromCurrentWord()
      }
      if (key === 'Enter') {
        evaluateCurrentWord()
      }
    }

    window.addEventListener('keydown', handleType)

    return () => {
      window.removeEventListener('keydown', handleType)
    }
  }, [currentWord, correctWord, isGameOver])

  React.useEffect(() => {
    if (guessedWords.includes(correctWord)) {
      setIsGameOver(true)
      alert('You won the game!')
    }
    if (guessedWords[guessedWords.length - 1] !== null) {
      setIsGameOver(true)
      alert('Game is over! The correct word was ' + correctWord)
    }
  }, [guessedWords])

  return (
    <div className='grid grid-cols-5 gap-4 mt-24'>
      {guessedWords.map((word, i) => {
        const isCurrentWord = i === guessedWords.findIndex((val) => val == null)
        return (
          <LetterGridRow
            key={i}
            word={isCurrentWord ? currentWord : word ?? ''}
            correctWord={correctWord}
            isEvaluated={word}
          />
        )
      })}
    </div>
  )
}
