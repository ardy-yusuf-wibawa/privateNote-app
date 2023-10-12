import React from 'react'

export const callButton = (onClick, iconSrc, toast, id) => {
  return (
    <button
      className='btn btn-circle btn-sm bg-slate-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-slate-200'
      onClick={() => {
        onClick(id)
        toast()
      }}>
      <img
        src={iconSrc}
        alt=''
        width='24'
        height='24'
      />
    </button>
  )
}
