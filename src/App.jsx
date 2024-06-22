import React, { useState } from 'react'
import './App.css'
import { reqAi } from './utils/groq'
import Khodam from './components/KhodamNames'
import AdjustableTextarea from './components/AdjustableTextarea'
import LoadingButton from './components/LoadingButton'
import ResultDisplay from './components/ResultDisplay'

const khodamNames = Khodam()

function App () {
  const [data, setData] = useState('')
  const [text, setText] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [randomKhodam, setRandomKhodam] = useState('')

  const handleSubmit = async () => {
    setLoading(true)
    setData('')
    setInputValue(text)

    const randomIndex = Math.floor(Math.random() * khodamNames.length)
    const randomKhodam = khodamNames[randomIndex]
    setRandomKhodam(randomKhodam)

    setTimeout(async () => {
      const combinedText = `${text}. Berikan penjelasan singkat tentang khodam ${randomKhodam} dalam 50 kata atau kurang.`
      const ai = await reqAi(combinedText)

      const maxWords = 50
      const wordArray = ai.split(' ')
      const limitedText =
        wordArray.length > maxWords
          ? wordArray.slice(0, maxWords).join(' ') + '...'
          : ai

      setData(limitedText)
      setLoading(false)
      setText('')
    }, 2000)
  }

  const handleEnter = event => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div
      className='w-dvw h-dvh p-6 flex items-center my-auto'
      style={{
        backgroundImage: `url(https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2024/06/05/khodamJPG-2452806090.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <main className='flex flex-col justify-center items-center max-w-2xl w-full mx-auto relative border-2 rounded-xl bg-black/30 backdrop-blur-sm'>
        <div className=' flex flex-row gap-4 items-center header'>
          <div className='flex flex-col my-4'>
            <h1 className='text-3xl md:text-5xl font-bold text-gray-200'>
              CEK KHODAM
            </h1>
          </div>
        </div>
        <div className='w-full input flex justify-center mb-4'>
          <form
            id='khodamForm'
            className='flex flex-col sm:flex-row gap-4 py-4 w-full px-4 sm:px-12'
            onSubmit={e => {
              e.preventDefault()
              handleSubmit()
            }}
          >
            <AdjustableTextarea
              value={text}
              onChange={e => setText(e.target.value)}
              onKeyDown={handleEnter}
            />
            <span className='flex items-end'>
              <LoadingButton loading={loading} onClick={handleSubmit} />
            </span>
          </form>
        </div>
        <ResultDisplay
          inputValue={inputValue}
          randomKhodam={randomKhodam}
          data={data}
        />
        <div className='mt-4'></div>
        <div className='absolute bottom-2 text-yellow-500'>
          Created by <span className='font-black'>Phieesu</span>
        </div>
      </main>
    </div>
  )
}

export default App
