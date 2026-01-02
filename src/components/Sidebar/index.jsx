import React from 'react'
import {
  SidebarContainer,
  LogoText,
  LogoWrapper,
  Logo,
  NavList,
  NavItem,
  AddAccountButton,
  ProfileIcon,
  StreakBox,
  StreakHeader,
  ProgressBar,
  ProgressFill,
  ProgressText
} from './SidebarStyle.js'
import { GiTargetShot } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Sidebar = ({ progressPercent, totalTodos, completedTodos }) => {
  const menuItems = ['ALL', 'Important', 'Learning', 'Life']

  return (
    <SidebarContainer>
      <LogoWrapper>
        <>
          <Logo />
        </>
      </LogoWrapper>

      <StreakBox>
        <StreakHeader>
          <span>🔥 Productivity</span>
          <span>
            {completedTodos}/{totalTodos}
          </span>
        </StreakHeader>

        <ProgressBar>
          <ProgressFill style={{ width: `${progressPercent}%` }} />
        </ProgressBar>

        <ProgressText>{progressPercent}% Completed</ProgressText>
      </StreakBox>

      <AddAccountButton to="/user/register">
        Add Account <ProfileIcon />
      </AddAccountButton>
    </SidebarContainer>
  )
}

export default Sidebar
