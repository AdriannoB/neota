import styled from 'styled-components'
import { Grid, Flex } from '../atomic'

export const ModalBackground = styled(Grid).attrs(() => ({
  pt: ['5rem', '10rem'],
  justifyContent: 'center',
  alignItems: 'center',
}))`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background: rgba(35, 40, 53, 0.4);
  overflow: auto;
`

export const ModalContent = styled(Grid).attrs(() => ({
  p: '1.5rem',
  mt: [9, 12],
  tabIndex: 0,
  id: 'alert_dialog',
  role: 'alertdialog',
  'aria-modal': 'true',
  'aria-labelledby': 'dialog_label',
  'aria-describedby': 'dialog_desc',
}))`
  grid-row-gap: 1rem;
  background: white;
  box-shadow: 0 0 10px black;
  border-radius: 4px;
`
