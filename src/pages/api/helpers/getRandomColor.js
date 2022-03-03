import colors from './colors'

export default function getRandomColor() {
  const random = Math.floor(Math.random() * 8)
  return colors[random]
}
