import styled from 'styled-components'
import { Link, LinkProps } from 'react-router-dom'

import { Flex } from '../../ui'

type StyledLinkProps = LinkProps & {
  active?: boolean
}

export const HeaderWrapper = styled(Flex).attrs(() => ({
  width: '100%',
  height: '4rem',
  justifyContent: 'center',
  alignItems: 'center'
}))`
  background-color: lightblue;
`

export const StyledLink = styled(Link).attrs(() => ({
  fontSize: ['1.2rem', '1rem'],
}))<StyledLinkProps>`
  text-decoration: none;
  color: ${({ active }) => (active ? 'green' : 'blue')};
  padding: 0 1rem;
  transition: color .2s ease;
  display: flex;
  align-items: center;

  &:hover {
    color: red;
    transition: color .2s ease;
  }
`