import React from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const ResultDisplay = ({ inputValue, randomKhodam, data }) => {
  return (
    <div className='max-w-xl h-full flex flex-col p-2 sm:p-0 rounded-xl justify-center items-start w-full mx-auto result-container'>
      {data && (
        <SyntaxHighlighter
          className='rounded-lg'
          language='markdown'
          style={darcula}
          wrapLongLines
        >
          {`${inputValue}, Khodam kamu adalah ${randomKhodam}\n\n${data}`}
        </SyntaxHighlighter>
      )}
    </div>
  )
}

export default ResultDisplay
