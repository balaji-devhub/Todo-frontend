import React, { useState } from 'react'

import { Container, Arrow, Menu, MenuItem, Trigger } from './DropdownStyle'

const Dropdown = props => {
  const [isOpen, setIsOpen] = useState(false)
  const { tagRequest } = props
  return (
    <Container>
      <Trigger onClick={() => setIsOpen(!isOpen)}>
        <Arrow $isOpen={isOpen} />
      </Trigger>

      <Menu $isOpen={isOpen}>
        <MenuItem
          onClick={() => {
            tagRequest('IMPORTANT'), setIsOpen(!isOpen)
          }}
        >
          Important
        </MenuItem>
        <MenuItem
          onClick={() => {
            tagRequest('LEARNING'), setIsOpen(!isOpen)
          }}
        >
          Learning
        </MenuItem>
        <MenuItem
          onClick={() => {
            tagRequest('LIFE'), setIsOpen(!isOpen)
          }}
        >
          Life
        </MenuItem>
      </Menu>
    </Container>
  )
}

export default Dropdown
