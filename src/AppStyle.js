import styled from 'styled-components'
import { PiUserCircleLight } from 'react-icons/pi'
import { LuLogOut } from 'react-icons/lu'
import { GiTargetShot } from 'react-icons/gi'

export const TargetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TargetIcon = styled(GiTargetShot)`
  font-size: 28px;
  cursor: pointer;
`

export const TargetFont = styled.p`
  font-size: 22px;
  cursor: pointer;
  margin-right: 5px;
  font-weight: bold;
`

export const ProfileIcon = styled(PiUserCircleLight)`
  font-size: 28px;
  cursor: pointer;
  font-weight: bold;
`

export const LogoutButton = styled(LuLogOut)`
  font-size: 25px;
  cursor: pointer;
  font-weight: bold;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1f8ff;

  /* FIX: Set height to 100vh and hide overflow to prevent the whole page from scrolling */
  height: 100vh;
  overflow: hidden;

  box-sizing: border-box;
  font-family: system-ui, -apple-system, sans-serif;
  letter-spacing: 0.5px;
  padding: 20px;

  /* Medium screens (Tablets) */
  @media (min-width: 768px) {
    padding-left: 280px;
  }
`

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 24px;
  box-sizing: border-box;
`

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 34px; /* proper spacing between Profile & Logout */
`

export const HeaderTitle = styled.h1`
  font-weight: 800; /* Slightly bolder for modern feel */
  font-size: clamp(28px, 6vw, 48px);
  margin-bottom: clamp(16px, 4vh, 32px); /* Fluid margin */
  flex-shrink: 0;
  color: #111;
`

export const InputRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 30px;
  width: 100%;
  max-width: 700px; /* Slightly wider for better desktop use */
  flex-shrink: 0;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
    max-width: 100%;
  }
`

export const TaskInput = styled.input`
  flex: 1;
  padding: 14px 20px;
  font-size: 16px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  transition: all 0.2s ease-in-out;
  appearance: none; /* Removes iOS default styling */

  &:focus {
    outline: none;
    border-color: #000;
    background: #fff;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.05); /* Adds a subtle depth */
  }

  &::placeholder {
    color: #9ca3af;
  }
`

export const AddButton = styled.button`
  padding: 14px 32px;
  border: none;
  background-color: #000;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;

  &:hover {
    background-color: #222;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0px); /* Visual feedback on click */
  }

  @media (max-width: 600px) {
    width: 100%;
    order: 2;
    padding: 16px; /* Larger tap target for mobile */
  }
`

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  padding-bottom: 60px; /* More space for the thumb to scroll */
  mask-image: linear-gradient(to bottom, black 95%, transparent 100%); /* Fades bottom items */

  /* Better Scrollbar for all browsers */
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 10px;
  }
`

export const TodoList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 8px; /* Adds consistent spacing between list items */
`
export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`
