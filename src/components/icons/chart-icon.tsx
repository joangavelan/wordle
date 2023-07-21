import { useSessionData } from '@/store'

type ChartIconProps = {
  onClick: () => void
}

export const ChartIcon = ({ onClick }: ChartIconProps) => {
  const { prefersDark } = useSessionData()

  return (
    <svg
      width='40'
      height='36'
      viewBox='0 0 40 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='cursor-pointer'
      onClick={onClick}
    >
      <g id='Chart_duotone_line'>
        <rect
          id='Rectangle 25'
          x='4.93549'
          y='6'
          width='29.6129'
          height='24'
          rx='2'
          fill={prefersDark ? '#FFFFFF' : '#7C7C7C'}
        />
        <path
          id='Vector 8'
          d='M13.1613 15L13.1613 24'
          stroke={prefersDark ? '#273B4A' : '#FFFFFF'}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          id='Vector 9'
          d='M19.7419 18V24'
          stroke={prefersDark ? '#273B4A' : '#FFFFFF'}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          id='Vector 10'
          d='M26.3226 12V24'
          stroke={prefersDark ? '#273B4A' : '#FFFFFF'}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  )
}
