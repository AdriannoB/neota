// import { Flex, Grid } from "../../ui";
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { routerConfig } from '../routing'

import { HeaderWrapper, StyledLink } from './header.styles'

export const Header = () => {
  const [activePath, setActivePath] = useState<string>(
    routerConfig.BASE.routerPath
  )
  const location = useLocation()

  useEffect(() => {
    setActivePath(location.pathname)
  }, [location])

  return (
    <HeaderWrapper>
      <StyledLink
        to={routerConfig.TABLEVIEW.routerPath}
        active={activePath === routerConfig.TABLEVIEW.routerPath}
      >
        Table
      </StyledLink>
      <StyledLink
        to={routerConfig.CHARTVIEW.routerPath}
        active={activePath === routerConfig.CHARTVIEW.routerPath}
      >
        Chart
      </StyledLink>
    </HeaderWrapper>
  )
}
