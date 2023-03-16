import React from 'react'

function Input({style, text, setData}) {
  return (
    <input
      className={style}
      placeholder={text}
      onChange={(e) => setData(e.target.value)}
    />
  )
}

export default Input
