import { WordExample } from '../ misc'

const examples = [
  {
    word: 'gatos',
    explanation: 'La letra <strong>G</strong> está en la palabra y en la posición correcta'
  },
  {
    word: 'vocal',
    explanation: 'La letra <strong>C</strong> está en la palabra pero en la posición incorrecta'
  },
  {
    word: 'canto',
    explanation: 'La letra <strong>O</strong> no está en la palabra'
  }
]

export const Info = () => {
  return (
    <div className='max-w-md flex flex-col gap-5'>
      <div>
        <h2 className='text-[35px] font-semibold text-center'>Cómo jugar</h2>
      </div>

      <div className='flex flex-col gap-3'>
        <p>Adivina la palabra oculta en cinco intentos.</p>
        <p>Cada intento debe ser una palabra válida de 5 letras.</p>
        <p>
          Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de
          acertar la palabr.
        </p>
      </div>

      <div className='flex flex-col gap-5'>
        <h3 className='text-lg font-medium'>Ejemplos</h3>

        {examples.map((example) => (
          <WordExample key={example.word} {...example} />
        ))}
      </div>

      <p>Puede haber letras repetidas. Las pistas son independientes para cada letra</p>

      <p className='text-center'>¡Una palabra nueva cada 5 minutos!</p>
    </div>
  )
}
