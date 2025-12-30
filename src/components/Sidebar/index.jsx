import React from 'react'
import {
  SidebarContainer,
  LogoText,
  LogoWrapper,
  NavList,
  NavItem,
  AddAccountButton
} from './SidebarStyle.js'

const Sidebar = () => {
  const menuItems = ['ALL', 'Important', 'Life']

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

      <AddAccountButton>Add Account</AddAccountButton>
    </SidebarContainer>
  )
}

export default Sidebar
