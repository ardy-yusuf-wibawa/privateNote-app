import React from 'react'
import NoteDetail from './NoteDetail'
import Toast from '../utils/Toast'

const ArchivedNotes = ({ data, onArchivedToNote, handleDelete }) => {
  if (data.length === 0) {
    return <Toast />
  }
  return (
    <ul className='grid grid-cols-4 grid-flow-row gap-6 '>
      {data.map((item) => (
        <li key={item.id}>
          <NoteDetail
            title={item.title}
            body={item.body}
            createdAt={item.createdAt}
            onArchivedToNote={() => onArchivedToNote(item.id)}
            handleDelete={() => handleDelete(item.id)}
          />
        </li>
      ))}
    </ul>
  )
}

export default ArchivedNotes
