type AppContainer = {
  children: React.ReactNode
}

export const AppContainer = ({ children }: AppContainer) => {
  return (
    <div className='flex justify-center h-screen'>
      <div className='flex flex-col items-center max-w-3xl w-full h-full pt-8'>{children}</div>
    </div>
  )
}
