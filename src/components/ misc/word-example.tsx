import { Letter } from '.'

type WordExampleProps = {
  word: string
  explanation: string
}

export const WordExample = ({ word, explanation }: WordExampleProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex w-full justify-between'>
        {word.split('').map((l) => (
          <Letter
            key={l}
            letter={l}
            background={
              word === 'gatos' && l === 'g'
                ? 'bg-green-100'
                : word === 'vocal' && l === 'c'
                ? 'bg-yellow-100'
                : word == 'canto' && l === 'o'
                ? 'bg-gray-500'
                : 'bg-white'
            }
          />
        ))}
      </div>

      <p dangerouslySetInnerHTML={{ __html: explanation }} />
    </div>
  )
}
