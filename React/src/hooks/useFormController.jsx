import { useState } from 'react';

export const useFormController = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  function onChange(event) {
    const { name, value } = event.target
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }))
  }

  return {
    formData,
    onChange,
  }
}