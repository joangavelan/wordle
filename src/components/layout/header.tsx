import { ThemeSwitch } from '../features/theme-switch'
import { ChartIcon } from '../icons/chart-icon'
import { InfoIcon } from '../icons/info-icon'

export const Header = () => {
  return (
    <header className='bg-gray-100 w-full flex justify-between items-center gap-2 py-4 px-6 rounded-[15px]'>
      <InfoIcon />
      <h1 className='uppercase text-[40px] tracking-widest font-semibold text-navy-300'>Wordle</h1>
      <div className='flex gap-2.5 items-center'>
        <ChartIcon />
        <ThemeSwitch />
      </div>
    </header>
  )
}
