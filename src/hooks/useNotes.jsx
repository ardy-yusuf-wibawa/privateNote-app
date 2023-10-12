import { useState, useEffect } from 'react'

function useNotes() {
  const [notes, setNotes] = useState([])
  const [currentView, setCurrentView] = useState('Notes')
  const [notesData, setNotesData] = useState(notes)
  const [archivedData, setArchivedData] = useState(notes)

  useEffect(() => {
    const newNote = notes.filter((note) => !note.archived)
    const newArchived = notes.filter((note) => note.archived)

    setNotesData(newNote)
    setArchivedData(newArchived)
  }, [notes])

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'))
    const savedCurrentView = JSON.parse(localStorage.getItem('currentView'))

    if (savedNotes) {
      setNotes(savedNotes)
    }

    if (savedCurrentView) {
      setCurrentView(savedCurrentView)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
    localStorage.setItem('currentView', JSON.stringify(currentView))
  }, [notes, currentView])

  const addNote = ({ title, body, archived }) => {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        {
          id: +new Date(),
          title,
          body,
          createdAt: new Date().toISOString(),
          archived
        }
      ]
    })
  }

  const updateArchivedStatus = (id, newArchivedStatus) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: newArchivedStatus }
      }
      return note
    })

    setNotes(updatedNotes)
    localStorage.setItem('notes', JSON.stringify(updatedNotes))
  }

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id)
    setNotes(updatedNotes)
  }

  return [
    notes,
    setNotes,
    currentView,
    addNote,
    updateArchivedStatus,
    deleteNote,
    setCurrentView,
    notesData,
    archivedData
  ]
}

export default useNotes
