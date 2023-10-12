import { useState } from 'react'

export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues)
  const [maxChar] = useState('25')

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    if (type === 'text' && value.length > maxChar) {
      return
    }

    const newValue = type === 'checkbox' ? checked : value

    setValues({
      ...values,
      [name]: newValue
    })
  }


  return [values, handleChange, maxChar]
}
