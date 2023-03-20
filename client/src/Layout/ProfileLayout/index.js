import React from 'react'
import SidebarProfile from './Sidebar/SidebarProfile'

function ProfileLayout({children}) {
  return (
    <div className="">
      <SidebarProfile />

      <div className="">{children}</div>
    </div>
  )
}

export default ProfileLayout
