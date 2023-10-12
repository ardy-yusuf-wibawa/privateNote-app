import { useState } from 'react'

export default function useData(notesData, archivedData) {
  const [searchQuery, setSearchQuery] = useState('')
  const filteredNotesData = notesData.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.body.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredArchivedData = archivedData.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.body.toLowerCase().includes(searchQuery.toLowerCase())
  )
  return [filteredNotesData, filteredArchivedData, setSearchQuery]
}
