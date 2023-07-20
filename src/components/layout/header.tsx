import { useSessionData } from '@/store'
import { Info } from '../features'
import { ThemeSwitch } from '../features/theme-switch'
import { ChartIcon } from '../icons/chart-icon'
import { InfoIcon } from '../icons/info-icon'
import * as React from 'react'

export const Header = () => {
  const modalRef = React.useRef<HTMLDialogElement | null>(null)
  const [modalContent, setModalContent] = React.useState<'info' | 'stats'>()
  const { isNewUser } = useSessionData()

  const openModal = (contentId: 'info' | 'stats') => {
    modalRef.current?.showModal()
    setModalContent(contentId)
  }

  const closeModal = () => {
    modalRef.current?.close()
  }

  React.useEffect(() => {
    if (isNewUser) {
      closeModal()
      openModal('info')
      useSessionData.setState((state) => ({ ...state, isNewUser: false }))
    }
  }, [])

  return (
    <header className='bg-gray-100 w-full flex justify-between items-center gap-2 py-4 px-6 rounded-[15px]'>
      <InfoIcon onClick={() => openModal('info')} />
      <h1 className='uppercase text-[40px] tracking-widest font-semibold text-navy-300'>Wordle</h1>
      <div className='flex gap-2.5 items-center'>
        <ChartIcon />
        <ThemeSwitch />
      </div>

      <dialog
        ref={modalRef}
        className='p-10 border-black border rounded-[5px] bg-gray-100 outline-none'
      >
        {modalContent === 'info' && <Info />}

        <button
          onClick={closeModal}
          className='block bg-green-100 text-white font-semibold text-2xl py-1.5 px-12 rounded-[5px] mt-12 mx-auto'
        >
          {modalContent === 'info' && '¡JUGAR!'}
        </button>
      </dialog>
    </header>
  )
}
