import React from 'react'
import {
  SidebarContainer,
  LogoText,
  LogoWrapper,
  NavList,
  NavItem,
  AddAccountButton,
  ProfileIcon
} from './SidebarStyle.js'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const menuItems = ['ALL', 'Important', 'Learning', 'Life']

  return (
    <SidebarContainer>
      <LogoWrapper>
        <LogoText>MYLOGO</LogoText>
      </LogoWrapper>

      <NavList>
        {menuItems.map((item, index) => (
          <NavItem key={index}>{item}</NavItem>
        ))}
      </NavList>

      <AddAccountButton to="/user/register">
        Add Account <ProfileIcon />
      </AddAccountButton>
    </SidebarContainer>
  )
}

export default Sidebar
