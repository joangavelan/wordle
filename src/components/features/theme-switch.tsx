import { Switch } from '../ui/switch'

export const ThemeSwitch = () => {
  return (
    <Switch
      className='
       bg-[url(/light-switch-body.svg)] 
       [&>span]:bg-[url(/light-switch-circle.svg)]
      '
      defaultChecked={true}
    />
  )
}
