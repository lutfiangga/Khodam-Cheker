import React, { useEffect, useRef } from 'react'

const AdjustableTextarea = ({ value, onChange, onKeyDown }) => {
  const inputRef = useRef(null)

  useEffect(() => {
    adjustHeight()
  }, [value])

  const adjustHeight = () => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto'
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`

      const maxRows = 6
      const lineHeight = parseInt(
        window.getComputedStyle(inputRef.current).lineHeight,
        10
      )
      const maxHeight = lineHeight * maxRows

      inputRef.current.style.height = `${
        inputRef.current.scrollHeight > maxHeight
          ? maxHeight
          : inputRef.current.scrollHeight
      }px`
      inputRef.current.style.overflowY =
        inputRef.current.scrollHeight > maxHeight ? 'auto' : 'hidden'
    }
  }

  return (
    <textarea
      ref={inputRef}
      className='py-2 px-4 text-md rounded-md w-full resize-none overflow-hidden'
      placeholder='Masukkan nama kamu'
      autoComplete='off'
      onChange={onChange}
      value={value}
      onKeyDown={onKeyDown}
      rows={1}
    />
  )
}

export default AdjustableTextarea
