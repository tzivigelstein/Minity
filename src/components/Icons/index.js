import React from 'react'

export const Add = props => (
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

export const Bin = props => (
  <svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="none"
    stroke="#eee"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <path d="M3 6L5 6 21 6"></path>
    <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
  </svg>
)

export const Check = props => (
  <svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

export const Edit = props => (
  <svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    stroke="#eee"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
)

export const Logout = props => (
  <svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    stroke="currentColor"
    strokeWidth={2}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

export const Search = props => (
  <svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    stroke="currentColor"
    strokeWidth={2}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx={11} cy={11} r={8} />
    <path d="M21 21l-4.35-4.35" />
  </svg>
)

export const Times = props => (
  <svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

export const BackArrow = props => (
  <svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    stroke="currentColor"
    strokeWidth={2}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
)
