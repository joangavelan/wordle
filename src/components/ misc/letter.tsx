import { cn } from '@/lib/utils'

type LetterProps = {
  background: string
  letter: string
}

export const Letter = ({ background, letter }: LetterProps) => {
  return (
    <div
      className={cn(
        'rounded-[5px] text-[35px] uppercase grid place-items-center w-[76px] h-[76px] font-bold border border-black dark:border-gray-400 text-black dark:text-white',
        background
      )}
    >
      {letter}
    </div>
  )
}
