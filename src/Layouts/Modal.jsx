import React from 'react'
import { closeForm } from '../utils/Toast'

const Modal = ({ modalInput, onClose, children, modalEdit, onCloseEdit }) => {
  const handleModal = () => {
    closeForm()
    onClose(false)
  }
  const handleModalEdit = () => {
    closeForm()
    onCloseEdit(false)
  }

  if (!modalInput && !modalEdit) return null

  return (
    <div className='z-[100] pt-[100px] left-0 top-0 w-[100vw] h-[100vh] fixed'>
      <div className='w-full fixed items-center justify-center flex flex-col'>
        {children}
        {modalInput && (
          <button
            className='btn btn-wide text-emerald-500 mt-8'
            onClick={handleModal}>
            Close
          </button>
        )}
        {modalEdit && (
          <button
            className='btn btn-wide text-emerald-500 mt-8'
            onClick={handleModalEdit}>
            Close Edit
          </button>
        )}
      </div>
    </div>
  )
}

export default Modal
