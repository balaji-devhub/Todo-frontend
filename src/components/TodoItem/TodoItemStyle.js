import styled, { keyframes } from 'styled-components'
import { MdOutlineDeleteOutline } from 'react-icons/md'

export const DeleteIcon = styled(MdOutlineDeleteOutline)`
  font-size: 20px;
`

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`

export const TodoItemContainer = styled.li`
  list-style: none;
  background-color: #ffffff;
  border: 1px solid #f1f5f9;
  border-radius: 20px;
  padding: 16px 28px;
  margin-bottom: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  animation: ${slideUp} 0.3s ease-out;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.04);
    transform: translateY(-1px);
  }

  /* Small screens */
  @media (max-width: 480px) {
    padding: 12px 16px;
    border-radius: 12px;
  }
`

export const TodoLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  min-width: 0; /* Important for text-overflow and flex child behavior */
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  /* Corrected to Square Shape */
  width: 24px;
  height: 24px;
  border-radius: 6px; /* Subtle roundness for a modern square */
  background-color: #000000;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &::after {
    content: '✓';
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    /* Only show checkmark if input is checked */
    display: ${({ checked }) => (checked ? 'block' : 'none')};
  }

  /* Optional: visual state for unchecked */
  &:not(:checked) {
    background-color: #f1f5f9;
    border: 1px solid #cbd5e1;
  }
`

export const TodoText = styled.p`
  margin: 0;
  font-size: 16px; /* Slightly smaller for better fit across devices */
  line-height: 1.5;
  color: ${({ completed }) => (completed ? '#94a3b8' : '#1e293b')};
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  font-weight: 300;
  letter-spacing: -0.01em;
  font-family: system-ui, sans-serif;

  /* Responsiveness: Prevent long words from breaking layout */
  word-break: break-word;
  overflow: hidden;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`

export const TodoActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px; /* Adjusted gap for better mobile spacing */
  flex-shrink: 0;
`

export const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #1e293b;
  padding: 8px; /* Larger tap target for mobile */
  display: flex;
  align-items: center;
  opacity: 0.8;
  transition: all 0.2s ease;
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    padding: 4px;
  }
`
