import { create } from 'zustand'

type Store = {
  correctWord: string
  guessedWords: Array<string | null>
  currentGuessWord: string
  isGameOver: boolean
  processKey: (key: string) => void
}

export const useGlobalStore = create<Store>((set) => ({
  correctWord: 'state',
  guessedWords: Array(5).fill(null),
  currentGuessWord: '',
  isGameOver: false,
  processKey: (key: string) =>
    set((state) => {
      if (state.isGameOver) return { ...state }

      if (/^[a-zñ]+$/.test(key) && state.currentGuessWord.length < 5) {
        return { currentGuessWord: state.currentGuessWord + key }
      }

      if (key === 'Backspace' && state.currentGuessWord.length !== 0) {
        return { currentGuessWord: state.currentGuessWord.slice(0, -1) }
      }

      if (key === 'Enter' && state.currentGuessWord.length === 5) {
        const newGuessedWords = [...state.guessedWords]
        newGuessedWords[state.guessedWords.findIndex((val) => val == null)] = state.currentGuessWord
        return { guessedWords: newGuessedWords, currentGuessWord: '' }
      }

      return { ...state }
    })
}))
