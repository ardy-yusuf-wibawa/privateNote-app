import React from 'react'
import { dateFormat } from '../utils/utilityServices'

export default function NoteDate({ isoDate }) {
  const formattedDate = dateFormat(isoDate)
  return (
    <>
      <span className='leading-[12px] text-slate-100 text-[10px]'>{formattedDate}</span>
    </>
  )
}
