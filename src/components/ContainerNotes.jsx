import React from 'react'
import NoteNotes from './NotesContainer'
import ArchivedNotes from './ArchivedNotes'

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

  return (
    <div className='w-[100%] px-[10%] mx-auto flex flex-row items-start justify-center gap-4'>
      <div className='w-[100%] pt-10'>
        <div className='flex justify-between items-center'>
          {currentView === 'Notes' ? (
            <NoteNotes
              data={notesData}
              onNoteToArchived={handleNoteToArchived}
              handleDelete={handleDelete}
              handleEditNote={handleEditNote}
            />
          ) : (
            <ArchivedNotes
              data={archivedData}
              onArchivedToNote={handleArchivedToNote}
              handleDelete={handleDelete}
            />
          )}
        </div>
      </div>
    </div>
  )
}
