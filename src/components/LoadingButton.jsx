import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { TbLoaderQuarter } from 'react-icons/tb'

const LoadingButton = ({ loading, onClick }) => {
  return (
    <button
      className='bg-gray-200 px-4 py-2 font-bold text-yellow-500 rounded-md flex items-center w-full justify-center'
      onClick={onClick}
      type='button'
      disabled={loading}
    >
      {loading ? (
        <div className='animate-spin h-5 w-5 text-yellow-500'>
          <TbLoaderQuarter />
        </div>
      ) : (
        <span className='inline sm:hidden'>Periksa Khodam</span>
      )}
      {!loading && (
        <span className='hidden sm:inline'>
          <FaPaperPlane size={24} />
        </span>
      )}
    </button>
  )
}

export default LoadingButton
