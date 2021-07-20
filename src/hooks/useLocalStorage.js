import { useState, useEffect } from 'react'

const hasLocalStorage = typeof window !== 'undefined'

const useLocalStorage = (key, defaultValue) => {
  let initial = ''
  if (hasLocalStorage) {
    const stored = localStorage.getItem(key)
    initial = stored !== 'null' ? JSON.parse(stored) : defaultValue
  }

  const [value, setValue] = useState(initial)

  useEffect(() => {
    hasLocalStorage && localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  const handleSetValue = newValue => {
    if (value === newValue) return
    setValue(newValue)
  }

  return [value, handleSetValue]
}

export default useLocalStorage
