import { useState, useEffect, useCallback } from 'react'

const hasLocalStorage = typeof window !== 'undefined'

const useToken = (key, defaultValue) => {
  let initial = ''
  if (hasLocalStorage) {
    const stored = localStorage.getItem(key)
    initial = stored !== 'null' ? stored : defaultValue
  }

  const [token, setToken] = useState(initial)

  useEffect(() => {
    hasLocalStorage && localStorage.setItem(key, token)
  }, [key, token])

  const handleSetToken = useCallback(newValue => {
    setToken(newValue)
  }, [])

  return [token, handleSetToken]
}

export default useToken
