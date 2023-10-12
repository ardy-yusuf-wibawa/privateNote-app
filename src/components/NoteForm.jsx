import React from 'react'
import useForm from '../hooks/useForm'

export default function NoteForm({ initialValues, onSubmit, isInput }) {
  const [values, handleChange, maxChar] = useForm(initialValues)

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(values)
  }

  const isSubmitDisabled = !values.title || !values.body

  return (
    <div className='mt-4 ml-6 flex flex-col items-start justify-center rounded-lg p-4 w-[33%] max-w-lg bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-b-2 border-slate-700'>
      <form
        className='form-control w-full max-w-lg gap-2 p-4'
        onSubmit={handleSubmit}>
        <p className='text-slate-100 text-sm place-self-end'>
          {values.title.length}/{maxChar} characters
        </p>
        <input
          type='text'
          name='title'
          placeholder='Isi Judul Catatan'
          className='input input-bordered w-full max-w-lg bg-slate-200 text-slate-800'
          value={values.title}
          onChange={handleChange}
        />
        <textarea
          name='body'
          className='textarea textarea-bordered textarea-lg w-full max-w-lg overflow-y-auto h-[220px] max-h-80 bg-slate-200 text-slate-800'
          placeholder='Isi Catatan'
          value={values.body}
          onChange={handleChange}
        />
        {isInput && (
          <div className='form-control'>
            <label className='label cursor-pointer'>
              <span className='label-text text-slate-100'> Archived</span>
              <input
                type='checkbox'
                name='archived'
                checked={values.archived}
                onChange={handleChange}
                className='checkbox border-slate-300'
              />
            </label>
          </div>
        )}
        <button
          className='btn place-self-end items-center text-emerald-500 w-[40%]'
          type='submit'
          disabled={isSubmitDisabled}>
          Submit
        </button>
      </form>
    </div>
  )
}
