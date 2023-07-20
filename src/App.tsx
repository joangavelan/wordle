import { Header } from '@/components/layout/header'
import { Keyboard, LetterGrid } from './components/features'
import * as React from 'react'
import { useGlobalStore, useSessionData } from './store'

export default function App() {
  const { correctWord, guessedWords, nextWordTimer, finishGame } = useGlobalStore()
  const { increaseNumberOfPlays, increaseVictories } = useSessionData()

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
