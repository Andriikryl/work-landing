import React from 'react'

export const MenuItem = ({text = '', icon}) => {
  return (
    <div>
        {icon}
        <span>{text}</span>
    </div>
  )
}
