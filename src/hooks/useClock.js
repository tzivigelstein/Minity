import { useState, useEffect } from 'react'

const updateTime = 30 * 1000

const useTime = () => {
  const [time, setTime] = useState({
    time: '',
    humanTime: ''
  })

  useEffect(() => {
    time.time === '' && setTimeState()

    const unsuscribeID = setInterval(() => setTimeState(), updateTime)

    return () => clearInterval(unsuscribeID)
  }, [])

  function setTimeState() {
    const [newTime, humanTime] = getTime()
    setTime({ ...time, time: newTime, humanTime })
  }

  function getTime() {
    const timeParseOptions = {
      hour: 'numeric',
      minute: 'numeric'
    }

    const millis = Date.now()
    const newTime = new Date(millis).toLocaleTimeString([], timeParseOptions)

    let humanTime
    const [hours, minutes] = newTime.split(':')

    if (hours >= 5 && hours <= 11 && minutes <= 59) {
      humanTime = 'Good morning'
    } else if (hours >= 12 && hours <= 16 && minutes <= 59) {
      humanTime = 'Good afternoon'
    } else {
      humanTime = 'Good evening'
    }

    return [newTime, humanTime]
  }

  return [time]
}

export default useTime
