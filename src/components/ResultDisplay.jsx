import React from 'react'

const ResultDisplay = ({ inputValue, randomKhodam, data }) => {
  return (
    <div className='max-w-5xl px-4 sm:px-12 h-full flex flex-col p-2 sm:p-0 rounded-xl justify-center items-start w-full mx-auto result-container mb-12'>
      {data && (
        <div className='bg-white/60 backdrop-blur-sm p-4 rounded-xl sm:p-6'>
          <div className='rounded-lg text-justify text-gray-900' wrapLongLines>
            <span className='font-bold '>{inputValue},</span> Khodam kamu adalah{' '}
            <span className='font-bold'>{randomKhodam}</span>
            <br />
            <br />
            {data}
          </div>
        </div>
      )}
    </div>
  )
}

export default ResultDisplay
