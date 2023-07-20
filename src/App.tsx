import { Header } from '@/components/layout/header'
import { Keyboard, LetterGrid } from './components/features'

export default function App() {
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
