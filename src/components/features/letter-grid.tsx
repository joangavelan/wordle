import * as React from 'react'
import { LetterGridRow } from './letter-grid-row'
import { useGlobalStore } from '@/store'

export const LetterGrid = () => {
  const { guessedWords, currentGuessWord, processKey, isGameOver, correctWord } = useGlobalStore()

  React.useEffect(() => {
    const handleType = (event: KeyboardEvent) => {
      processKey(event.key)
    }

    window.addEventListener('keydown', handleType)

    return () => {
      window.removeEventListener('keydown', handleType)
    }
  }, [currentGuessWord, correctWord, isGameOver])

  React.useEffect(() => {
    if (guessedWords.includes(correctWord)) {
      useGlobalStore.setState((state) => ({ ...state, isGameOver: true }))
      alert('You won the game!')
    }
    if (guessedWords[guessedWords.length - 1] !== null) {
      useGlobalStore.setState((state) => ({ ...state, isGameOver: true }))
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
            word={isCurrentWord ? currentGuessWord : word ?? ''}
            correctWord={correctWord}
            isEvaluated={Boolean(word)}
          />
        )
      })}
    </div>
  )
}
