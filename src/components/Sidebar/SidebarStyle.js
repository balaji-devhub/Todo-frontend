import styled from 'styled-components'

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

  @media (max-width: 768px) {
    display: none;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center; /* Changed to center for better visual balance */
  margin-bottom: 48px;
  width: 100%;
`

export const LogoText = styled.h2`
  font-family: 'Google Sans', sans-serif;
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
  gap: 8px; /* Better than margins for consistent spacing */
  justify-content: flex-start; /* Items start from top, button stays at bottom */
  flex-grow: 1;
`

export const NavItem = styled.li`
  font-family: 'Google Sans', sans-serif;
  font-size: 15px;
  font-weight: 500;
  padding: 12px 16px;
  color: #5f6368; /* Use Google's standard grey for better readability */
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.3px;

  &:hover {
    background-color: #f1f3f4;
    color: #000;
    padding-left: 20px; /* Instead of translateX, increase padding for a smoother look */
  }
`

export const AddAccountButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 16px; /* Slightly more rounded for modern feel */
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-top: auto;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: #333; /* Darker grey instead of opacity for cleaner UI */
  }
`
