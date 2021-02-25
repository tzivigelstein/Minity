import React from 'react'

const Check = props => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      stroke="currentColor"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  )
}

export default Check
