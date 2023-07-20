import { useGlobalStore } from '@/store'

export const Timer = () => {
  const { nextWordTimer } = useGlobalStore()

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secondsLeft = seconds % 60
    return `${minutes.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`
  }

  return <div className='text-3xl font-bold'>{formatTime(nextWordTimer)}</div>
}
