import { useState } from 'react'

function useEdit(notes, openEditModal) {
  const [editedContent, setEditedContent] = useState({ title: '', body: '' })

  const handleEditNote = (id) => {
    const noteToEdit = notes.find((note) => note.id === id)
    setEditedContent({ title: noteToEdit.title, body: noteToEdit.body, id })
    openEditModal()
  }
  return [editedContent, handleEditNote]
}
export default useEdit
