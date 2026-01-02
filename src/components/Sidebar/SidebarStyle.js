import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { VscAccount } from 'react-icons/vsc'
import { GiTargetShot } from 'react-icons/gi'

export const Logo = styled(GiTargetShot)`
  font-size: 80px;
`

export const SidebarContainer = styled.div`
  box-sizing: border-box;
  width: 260px;
  height: 100vh;
  background-color: #ffffff;
  border-right: 1px solid #f2f2f2;
  display: flex;
  flex-direction: column;
  padding: 40px 24px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;

  @media (max-width: 767px) {
    display: none;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
  width: 100%;
`

export const LogoText = styled.h2`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 2px;
  margin: 0;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
`

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-start;
  flex-grow: 1;
`

export const NavItem = styled.li`
  font-family: 'Google Sans', sans-serif;
  font-size: 15px;
  font-weight: 500;
  padding: 12px 16px;
  color: #5f6368;
  cursor: pointer;
  border-radius: 12px;
  transition: background-color 0.2s ease, color 0.2s ease, padding-left 0.2s ease,
    box-shadow 0.2s ease;
  letter-spacing: 0.3px;

  &:hover {
    background-color: #f1f3f4;
    color: #000;
    padding-left: 20px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  }
`

export const AddAccountButton = styled(Link)`
  margin-top: auto; /* ✅ pushes button to bottom */

  width: 100%;
  padding: 14px;
  border: none;
  background-color: #000;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  margin-right: 10px;
  gap: 20px;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  &:hover {
    background-color: #222;
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (min-width: 480px) {
    width: auto;
    padding: 12px 32px;
  }
`

export const ProfileIcon = styled(VscAccount)`
  margin-left: 10px;
  line-height: 1px;
`

export const StreakBox = styled.div`
  margin: 30px 0;
  padding: 16px;
  background: #f9fafc;
  border-radius: 14px;
`

export const StreakHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 10px;
`

export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background: #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
`

export const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #000, #555);
  border-radius: 10px;
  transition: width 0.4s ease-in-out;
`

export const ProgressText = styled.p`
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
  color: #555;
`
