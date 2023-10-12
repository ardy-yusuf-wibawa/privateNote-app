import React from 'react'
import Header from '../components/Header'
import AddNote from '../components/AddNote'
import ContainerNotes from '../components/ContainerNotes'
import Sidebar from '../components/Sidebar'
import Modal from '../UI/modal'
import EditNote from '../components/EditNote'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useNotes from '../hooks/useNotes'
import useModal from '../hooks/useModal'
import useEdit from '../hooks/useEdit'
import useData from '../hooks/useData'

export default function PersonalNotes() {
  const [
    notes,
    setNotes,
    currentView,
    addNote,
    updateArchivedStatus,
    deleteNote,
    setCurrentView,
    notesData,
    archivedData
  ] = useNotes()
  const [modalInput, modalEdit, openModal, openEditModal, closeModal] = useModal()
  const [filteredNotesData, filteredArchivedData, setSearchQuery] = useData(notesData, archivedData)
  const [editedContent, handleEditNote] = useEdit(notes, openEditModal)

  return (
    <>
      <div className='w-full h-[100%] min-h-[100vh] max-h-full bg-slate-900'>
        <Header
          setSearchQuery={setSearchQuery}
          currentView={currentView}
        />
        <Sidebar
          onOpen={openModal}
          setCurrentView={setCurrentView}
        />
        {modalInput && (
          <Modal
            modalInput={modalInput}
            onClose={closeModal}>
            <AddNote addNotes={addNote} />
          </Modal>
        )}
        {modalEdit && (
          <Modal
            modalEdit={modalEdit}
            onCloseEdit={closeModal}>
            <EditNote
              setNote={setNotes}
              addNotes={notes}
              editedContent={editedContent}
            />
          </Modal>
        )}
        <ContainerNotes
          onEditNote={handleEditNote}
          currentView={currentView}
          notesData={filteredNotesData}
          archivedData={filteredArchivedData}
          onNoteToArchived={(id) => updateArchivedStatus(id, true)}
          onArchivedToNote={(id) => updateArchivedStatus(id, false)}
          onDelete={deleteNote}
          className='w-auto'
        />
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme='light'
        />
      </div>
    </>
  )
}
