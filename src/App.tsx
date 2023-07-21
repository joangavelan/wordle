import { Header } from '@/components/layout/header'
import { Keyboard, LetterGrid } from './components/features'
import * as React from 'react'
import { useGlobalStore, useSessionData } from './store'
import { words } from './utils'

export default function App() {
  const { correctWord, setGameWord, guessedWords, nextWordTimer, finishGame } = useGlobalStore()
  const { increaseNumberOfPlays, increaseVictories, wordsPlayed, addWordPlayed } = useSessionData()

  React.useEffect(() => {
    if (correctWord) return

    // randomly pick a 5 letter word from the word list array that has not been played before and remove any tildes it might have
    const validWords = words.filter((word) => !wordsPlayed.includes(word) && word.length === 5)
    const validWord = validWords[Math.floor(Math.random() * validWords.length)]
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')

    setGameWord(validWord)
  }, [correctWord])

  React.useEffect(() => {
    const timer = setInterval(() => {
      useGlobalStore.setState((state) => ({
        nextWordTimer: state.nextWordTimer > 0 ? state.nextWordTimer - 1 : 0
      }))
    }, 1000)

    const hasUserGuessedTheWord = guessedWords.includes(correctWord)
    const hasUserUsedAllAttempts = guessedWords[guessedWords.length - 1] !== null
    const hasTimerRunOut = nextWordTimer === 0

    if (hasUserGuessedTheWord || hasUserUsedAllAttempts || hasTimerRunOut) {
      clearInterval(timer)
      increaseNumberOfPlays()
      addWordPlayed(correctWord)
      finishGame()

      if (hasUserGuessedTheWord) {
        increaseVictories()
      }
    }

    return () => clearInterval(timer)
  }, [guessedWords, nextWordTimer])

  return (
    <div className='flex justify-center h-screen'>
      <div className='flex flex-col items-center max-w-3xl w-full h-full pt-8'>
        <Header />
        <LetterGrid />
        <Keyboard />
      </div>
    </div>
  )
}
