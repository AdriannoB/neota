import styled from 'styled-components'

import { Flex } from '../../ui'

export const HeaderWrapper = styled(Flex).attrs(() => ({
  width: '100%',
  height: '4rem',
  justifyContent: 'center',
  alignItems: 'center'
}))`
  background-color: lightblue;
`