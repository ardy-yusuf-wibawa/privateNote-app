import { useState } from 'react'

function useModal(initialState = false) {
  const [modalInput, setModalInput] = useState(initialState)
  const [modalEdit, setModalEdit] = useState(initialState)

  const openModal = () => {
    setModalInput(true)
  }

  const closeModal = () => {
    setModalInput(false)
    setModalEdit(false)
  }

  const openEditModal = () => {
    setModalEdit(true)
  }

  return [modalInput, modalEdit, openModal, openEditModal, closeModal]
}

export default useModal
