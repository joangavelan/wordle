import { useGlobalStore } from '@/store'
import { keyboardLayout } from '@/utils'

export const Keyboard = () => {
  const { processKey } = useGlobalStore()

  const handleOnKeyClick = (key: string) => {
    processKey(key)
  }

  return (
    <div className='flex flex-col gap-2.5 bg-gray-100 dark:bg-[#DADCE008] mt-16 pl-6 pr-20 py-10 [&>div:nth-child(1)]:ml-7 [&>div:nth-child(2)]:ml-10 w-full rounded-[15px]'>
      {keyboardLayout.map((row, i) => (
        <div key={i} className='flex justify-between min-w-full'>
          {row.map((key, i) => (
            <button
              key={i}
              className='bg-gray-200 dark:bg-navy-100 dark:text-white p-4 min-w-[44px] rounded-[5px]'
              onClick={() => handleOnKeyClick(key)}
            >
              {key.toUpperCase()}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}
