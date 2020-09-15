import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = ({ faCode }) => (
  <span className="icon">
    <FontAwesomeIcon icon={faCode} />
  </span>
)
