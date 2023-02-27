import React from 'react'
import SidebarProfile from './Sidebar/SidebarProfile'

function ProfileLayout(props) {
    const {route} = props
  return (
    <div><SidebarProfile/>
    <div><div>{props}</div></div>
    </div>
  )
}

export default ProfileLayout