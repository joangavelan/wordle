import { useGlobalStore, useSessionData } from '@/store'
import { Timer } from '../ misc'

export const Stats = () => {
  const { isGameOver, correctWord } = useGlobalStore()
  const { numberOfPlays, victories } = useSessionData()

  return (
    <div className='flex flex-col items-center text-center gap-16 w-xl'>
      <h2 className='text-2xl font-bold'>Estadísticas</h2>

      <div className='flex justify-between gap-48'>
        <div className='flex flex-col gap-4'>
          <strong className='text-4xl'>{numberOfPlays}</strong>
          <p className='text-xl'>Jugadas</p>
        </div>

        <div className='flex flex-col gap-4'>
          <strong className='text-4xl'>{victories}</strong>
          <p className='text-xl'>Victorias</p>
        </div>
      </div>

      {isGameOver && (
        <p className='text-xl'>
          La palabra era: <span className='uppercase font-bold'>{correctWord}</span>
        </p>
      )}

      <div className='flex flex-col gap-4'>
        <p className='uppercase'>siguiente palabra</p>
        <Timer />
      </div>
    </div>
  )
}
