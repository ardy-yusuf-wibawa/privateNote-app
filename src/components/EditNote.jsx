import React from 'react'
import NoteForm from './NoteForm'
import { updateNote } from '../utils/Toast'

export default function EditNote({ editedContent, addNotes, setNote}) {
  const handleSubmit = (values) => {
    const updatedNotes = addNotes.map((note) =>
      note.id === editedContent.id ? { ...note, title: values.title, body: values.body } : note
    )

    setNote(updatedNotes)
    localStorage.setItem('notes', JSON.stringify(updatedNotes))
    updateNote()
  }

  return (
    <NoteForm
      initialValues={editedContent}
      onSubmit={handleSubmit}
    />
  )
}
