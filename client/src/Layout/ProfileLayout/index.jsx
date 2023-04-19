import React, {useState} from 'react'
import SidebarProfile from './Sidebar/SidebarProfile'

function ProfileLayout({children}) {
  const [Edit, setEdit] = useState(true)
  return (
    <div className="">
      {Edit && <SidebarProfile />}

      <div className="">{React.cloneElement(children, {setEdit})}</div>
    </div>
  )
}

export default ProfileLayout
