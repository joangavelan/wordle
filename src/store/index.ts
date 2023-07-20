import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Store = {
  correctWord: string
  guessedWords: Array<string | null>
  currentGuessWord: string
  isGameOver: boolean
  nextWordTimer: number
  resetGame: () => void
  finishGame: () => void
  processKey: (key: string) => void
}

const initialState = {
  correctWord: 'state',
  guessedWords: Array(5).fill(null),
  currentGuessWord: '',
  isGameOver: false,
  nextWordTimer: 5 * 60
}

export const useGlobalStore = create<Store>((set) => ({
  ...initialState,
  resetGame: () => {
    set(initialState)
  },
  finishGame: () => {
    set(() => ({ isGameOver: true }))
  },
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

type SessionData = {
  isNewUser: boolean
  numberOfPlays: number
  victories: number
  increaseNumberOfPlays: () => void
  increaseVictories: () => void
}

const initialSessionState = {
  isNewUser: true,
  numberOfPlays: 0,
  victories: 0
}

export const useSessionData = create(
  persist<SessionData>(
    (set) => ({
      ...initialSessionState,
      increaseNumberOfPlays: () =>
        set((state) => ({ ...state, numberOfPlays: state.numberOfPlays + 1 })),
      increaseVictories: () => set((state) => ({ ...state, victories: state.victories + 1 }))
    }),
    {
      name: 'wordle-game-session-data'
    }
  )
)
