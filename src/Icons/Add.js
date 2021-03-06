import React from 'react'

const Add = props => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      stroke="#2f3848"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export default Add
