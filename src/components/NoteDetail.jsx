import React from 'react'
import Card from '../Layouts/Card'
import NoteDate from './NoteDate'
import { callButton } from './NoteButton'
import { openForm, undoArchived, deleteNote, savedArchived } from '../utils/Toast'

const NoteDetail = ({
  handleEditNote,
  id,
  title,
  createdAt,
  handleDelete,
  onNoteToArchived,
  onArchivedToNote,
  body
}) => {
  return (
    <Card className='flex py-1 px-1 animate fa '>
      <div className='card-actions flex items-center justify-end'>
        <div className='card-body p-1'>
          <div className='flex flex-col'>
            <NoteDate isoDate={createdAt} />
            <h3 className='card-title text-sm text-slate-100'>{title}</h3>
          </div>
        </div>
        {handleEditNote && callButton(handleEditNote, '/icons8-edit-64.png', openForm, id)}
        {onNoteToArchived &&
          callButton(onNoteToArchived, '/icons8-product-documents-64.png', savedArchived, id)}
        {onArchivedToNote && callButton(onArchivedToNote, '/icons8-notes-64.png', undoArchived, id)}
        {handleDelete && callButton(handleDelete, '/icons8-close-64.png', deleteNote, id)}
      </div>
      <p className=' text-xs text-slate-100 break-all line-clamp-6 hover:line-clamp-none hover:ease-linear duration-300'>
        {body}
      </p>
    </Card>
  )
}

export default NoteDetail
