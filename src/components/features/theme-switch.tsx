import { useSessionData } from '@/store'
import { Switch } from '../ui/switch'
import * as React from 'react'

export const ThemeSwitch = () => {
  const { prefersDark, toggleDarkMode } = useSessionData()

  React.useEffect(() => {
    prefersDark && document.documentElement.classList.add('dark')
  }, [])

  return (
    <Switch
      className='
       bg-[url(/light-switch-body.svg)] 
       [&>span]:bg-[url(/light-switch-circle.svg)]
       dark:bg-[url(/dark-switch-body.svg)] 
       dark:[&>span]:bg-[url(/dark-switch-circle.svg)]
      '
      onClick={toggleDarkMode}
      checked={!prefersDark}
    />
  )
}
