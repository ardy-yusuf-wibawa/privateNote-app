import React from 'react'
import NoteForm from './NoteForm'
import { addNote } from '../utils/Toast'

export default function InputForm({ addNotes }) {
  const initialValues = {
    title: '',
    body: '',
    archived: false
  }

  const handleSubmit = (values) => {
    addNotes(values)
    addNote()
  }

  return (
    <NoteForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      isInput={true}
    />
  )
}
