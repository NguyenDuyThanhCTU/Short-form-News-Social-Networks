import React from 'react'
import Header from '../DefaultLayout/Header/Header'

function OnlyHeader({children}) {
  return (
    <div>
      <Header />
      <div className="mt-16">{children}</div>
    </div>
  )
}

export default OnlyHeader
