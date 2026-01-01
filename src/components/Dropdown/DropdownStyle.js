import styled from 'styled-components'
import { IoIosArrowDropdown } from 'react-icons/io'

export const Container = styled.div`
  position: relative;
  display: inline-block;
  font-family: 'Inter', -apple-system, sans-serif;
`

export const Trigger = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6e7191;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  margin-top: 12px;
`

export const Arrow = styled(IoIosArrowDropdown)`
  font-size: 25px;
`

export const Menu = styled.ul`
  position: absolute;
  top: 100%;
  left: 50%;
  margin-top: 15px;
  padding: 0;
  width: 200px;
  list-style: none;
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

  /* Centering and Animation logic */
  transform: translateX(-50%) ${props => (props.$isOpen ? 'translateY(0)' : 'translateY(10px)')};
  opacity: ${props => (props.$isOpen ? 1 : 0)};
  visibility: ${props => (props.$isOpen ? 'visible' : 'hidden')};
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;

  /* The little triangle pointer */
  &::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #ffffff transparent;
  }
`

export const MenuItem = styled.li`
  padding: 15px 20px;
  font-size: 18px;
  font-weight: 500;
  color: #000000;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f5;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f9fafb;
    color: #2765b7ff;
  }

  /* Round corners for hover effect at top and bottom */
  &:first-child:hover {
    border-radius: 12px 12px 0 0;
  }
  &:last-child:hover {
    border-radius: 0 0 12px 12px;
  }
`
