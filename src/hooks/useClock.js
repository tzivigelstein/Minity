import { useState } from 'react'

const fifteenSeconds = 60 * 1000
const timeParseOptions = {
  hour: 'numeric',
  minute: 'numeric',
}

const useTime = () => {
  const [time, setTime] = useState({
    time: '',
    humanTime: '',
  })

  const { time: actualTime } = time

  if (actualTime === '') {
    setTimeState()
  } else {
    setInterval(() => {
      setTimeState()
    }, fifteenSeconds)
  }

  function setTimeState() {
    const [newTime, humanTime] = getTime()
    setTime({ ...time, time: newTime, humanTime })
  }

  function getTime() {
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

  return time
}

export default useTime
