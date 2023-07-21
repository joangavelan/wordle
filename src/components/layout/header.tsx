import { useGlobalStore, useSessionData } from '@/store'
import { Info, Stats } from '../features'
import { ThemeSwitch } from '../features/theme-switch'
import { ChartIcon } from '../icons/chart-icon'
import { InfoIcon } from '../icons/info-icon'
import * as React from 'react'

export const Header = () => {
  const modalRef = React.useRef<HTMLDialogElement | null>(null)
  const [modalContent, setModalContent] = React.useState<'info' | 'stats'>()
  const { isNewUser } = useSessionData()
  const { isGameOver, resetGame } = useGlobalStore()

  const openModal = (contentId: 'info' | 'stats') => {
    if (modalRef.current?.hasAttribute('open')) return
    setModalContent(contentId)
    modalRef.current?.showModal()
  }

  const closeModal = () => {
    modalRef.current?.close()
    if (isGameOver) resetGame()
  }

  React.useEffect(() => {
    if (isNewUser) {
      openModal('info')
      useSessionData.setState(() => ({ isNewUser: false }))
    }
  }, [])

  React.useEffect(() => {
    if (isGameOver) {
      openModal('stats')
    }
  }, [isGameOver])

  return (
    <header className='bg-gray-100 dark:bg-[#DADCE008] w-full flex justify-between items-center gap-2 py-4 px-6 rounded-[15px]'>
      <InfoIcon onClick={() => openModal('info')} />
      <h1 className='uppercase text-[40px] tracking-widest font-semibold text-navy-300 dark:text-gray-200'>
        Wordle
      </h1>
      <div className='flex gap-2.5 items-center'>
        <ChartIcon onClick={() => openModal('stats')} />
        <ThemeSwitch />
      </div>

      <dialog
        ref={modalRef}
        className='p-10 border-black dark:border-gray-400 border rounded-[15px] bg-gray-100 dark:bg-navy-200 dark:text-white outline-none max-w-lg w-full'
      >
        <button autoFocus className='opacity-0'></button>

        {modalContent === 'info' && <Info />}
        {modalContent === 'stats' && <Stats />}
        <button
          onClick={closeModal}
          className='block bg-green-100 text-white font-semibold text-2xl py-1.5 px-12 rounded-[5px] mt-12 mx-auto'
        >
          {modalContent === 'info' && '¡JUGAR!'}
          {modalContent === 'stats' && 'Aceptar'}
        </button>
      </dialog>
    </header>
  )
}
