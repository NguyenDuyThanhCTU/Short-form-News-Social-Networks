import React from 'react';
import SidebarProfile from './Sidebar/SidebarProfile';

function ProfileLayout(props) {
  const { route } = props;
  return (
    <div className="">
      <SidebarProfile />

      <div className="">{route}</div>
    </div>
  );
}

export default ProfileLayout;
