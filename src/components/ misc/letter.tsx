import { cn } from '@/lib/utils'

type LetterProps = {
  background: string
  letter: string
}

export const Letter = ({ background, letter }: LetterProps) => {
  return (
    <div
      className={cn(
        background,
        'rounded-[5px] text-[35px] uppercase grid place-items-center w-[76px] h-[76px] font-bold border border-black text-black'
      )}
    >
      {letter}
    </div>
  )
}
