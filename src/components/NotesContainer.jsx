import React from 'react'
import Toast from '../utils/Toast'
import NoteDetail from './NoteDetail'

const NoteNotes = ({ data, onNoteToArchived, handleDelete, handleEditNote }) => {
  if (data.length === 0) {
    return <Toast />
  }
  return (
    <ul className='grid grid-cols-4 grid-flow-row gap-6'>
      {data.map((item) => (
        <li key={item.id}>
          <NoteDetail
            title={item.title}
            body={item.body}
            createdAt={item.createdAt}
            handleEditNote={() => handleEditNote(item.id)}
            onNoteToArchived={() => onNoteToArchived(item.id)}
            handleDelete={() => handleDelete(item.id)}
          />
        </li>
      ))}
    </ul>
  )
}

export default NoteNotes
