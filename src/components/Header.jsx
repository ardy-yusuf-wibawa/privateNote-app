// Header.js
import React from 'react'

export default function Header({ setSearchQuery, currentView }) {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  let headerTitle = 'Notes'
  if (currentView === 'Archived') {
    headerTitle = 'Archived'
  }

  return (
    <div className='navbar flex items-center justify-between h-[5%] w-[100%] px-[2%] bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-b-2 border-slate-700 sticky top-0 z-50'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-slate-100 normal-case text-xl font-comic'>{headerTitle}</a>
      </div>
      <div className='flex-none overflow-auto'>
        <div className='form-control'>
          <input
            type='text'
            placeholder='Search in Title & Body'
            className='input input-bordered w-[192px] sm:w-[30rem] bg-slate-200 text-slate-800'
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </div>
  )
}
