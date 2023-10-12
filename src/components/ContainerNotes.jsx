import React from 'react'
import NoteDetail from './NoteDetail'
import Toast from '../utils/Toast'

export default function ContainerNotes({
  onEditNote,
  onDelete,
  onNoteToArchived,
  onArchivedToNote,
  archivedData,
  notesData,
  currentView
}) {
  const handleEditNote = (id) => {
    onEditNote(id)
  }

  const handleNoteToArchived = (id) => {
    onNoteToArchived(id)
  }

  const handleArchivedToNote = (id) => {
    onArchivedToNote(id)
  }

  const handleDelete = (id) => {
    onDelete(id)
  }

  const renderNotes = (data, onNoteToArchived, handleDelete, handleEditNote) => {
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

  const renderArchivedNotes = (data, onArchivedToNote, handleDelete) => {
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

  return (
    <div className='w-[100%] px-[10%] mx-auto flex flex-row items-start justify-center gap-4'>
      <div className='w-[100%] pt-10'>
        <div className='flex justify-between items-center'>
          {currentView === 'Notes'
            ? renderNotes(notesData, handleNoteToArchived, handleDelete, handleEditNote)
            : renderArchivedNotes(archivedData, handleArchivedToNote, handleDelete)}
        </div>
      </div>
    </div>
  )
}
