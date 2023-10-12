import React from 'react'
import { openForm } from '../utils/Toast'

export default function Sidebar({ onOpen, setCurrentView }) {
  const handleModal = () => {
    onOpen(true)
    openForm()
  }

  const handleViewChange = (view) => {
    setCurrentView(view)
  }

  const buttonData = [
    { label: 'Create Icon', iconSrc: '/privateNote-app/icons8-create-64.png', onClick: handleModal },
    {
      label: 'Notes Icon',
      iconSrc: '/privateNote-app/icons8-notes-64.png',
      onClick: () => handleViewChange('Notes')
    },
    {
      label: 'Archived Icon',
      iconSrc: '/privateNote-app/icons8-product-documents-64.png',
      onClick: () => handleViewChange('Archived')
    }
  ]

  return (
    <div className='flex flex-row h-full min-h-[100vh] fixed z-10'>
      <nav className='bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-b-2 border-slate-700 w-20 justify-between flex flex-col'>
        <div className='mt-10 mb-10'>
          <div className='mt-4'>
            {buttonData.map((button) => (
              <button
                key={button.label}
                className='flex items-center justify-center mb-20 mx-auto hover:scale-125'
                onClick={button.onClick}>
                <img
                  src={button.iconSrc}
                  className='h-8 w-8 hover:scale-125 '
                  alt={button.label}
                />
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}
