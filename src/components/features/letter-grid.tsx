import * as React from 'react'
import { LetterGridRow } from './letter-grid-row'
import { useGlobalStore } from '@/store'

export const LetterGrid = () => {
  const { guessedWords, currentGuessWord, processKey, correctWord } = useGlobalStore()

  React.useEffect(() => {
    const handleType = (event: KeyboardEvent) => {
      processKey(event.key)
    }

    window.addEventListener('keydown', handleType)

    return () => {
      window.removeEventListener('keydown', handleType)
    }
  }, [])

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
