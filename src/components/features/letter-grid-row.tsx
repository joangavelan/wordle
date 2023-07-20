import { cn } from '@/lib/utils'

type LetterGridRowProps = {
  word: string
  isEvaluated: boolean
  correctWord: string
}

export const LetterGridRow = ({ word, isEvaluated, correctWord }: LetterGridRowProps) => {
  const getLetterBackground = (letter: string, index: number) => {
    if (!isEvaluated) return 'bg-[#DADDDE]'
    if (word[index] === correctWord[index]) return 'bg-[#66A060]'
    if (correctWord.includes(letter)) return 'bg-[#CEB02C]'
    else return 'bg-[#939B9F]'
  }

  const fiveElArray = Array.from({ length: 5 }, (_, i) => i)

  return (
    <>
      {fiveElArray.map((n) => {
        const letter = word[n]

        return (
          <div
            key={n}
            className={cn(
              getLetterBackground(letter, n),
              'rounded-[5px] text-[35px] uppercase grid place-items-center w-[76px] h-[76px] font-bold text-white'
            )}
          >
            {letter}
          </div>
        )
      })}
    </>
  )
}
