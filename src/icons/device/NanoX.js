// @flow

import React from 'react'

const path = (
  <path
    fill="currentColor"
    d="M6.667 14.543A4.181 4.181 0 0 0 5 13.223V1.667H1.667v11.556A4.181 4.181 0 0 0 0 14.543V1.2A1.2 1.2 0 0 1 1.2 0h4.267a1.2 1.2 0 0 1 1.2 1.2v13.343zm-3.334 4.403a.833.833 0 1 1 0-1.666.833.833 0 0 1 0 1.666zm0-14a.833.833 0 1 1 0-1.666.833.833 0 0 1 0 1.666zm-1.666 21.72H5v-9.623a1.667 1.667 0 1 0-3.333 0v9.624zM3.333 13.71a3.333 3.333 0 0 1 3.334 3.333v10.302a.988.988 0 0 1-.989.988H.988A.988.988 0 0 1 0 27.345V17.043a3.333 3.333 0 0 1 3.333-3.333z"
  />
)

export default ({ size, ...p }: { size: number }) => (
  <svg viewBox="0 0 8 30" height={size} width={size} {...p}>
    {path}
  </svg>
)
