import { FC, HTMLAttributes, PropsWithChildren } from 'react'
import styled, { CSSProperties } from 'styled-components'
import {
  layout,
  space,
  flexbox,
  position,
  zIndex,
  gridColumn,
  background,
  width,
  height,
  border,
  color,
  LayoutProps,
  SpaceProps,
  FlexboxProps,
  PositionProps,
  ZIndexProps,
  GridColumnProps,
  BackgroundProps,
  WidthProps,
  HeightProps,
  BorderProps,
  ColorProps,
} from 'styled-system'

type CustomFlexProps = Pick<CSSProperties, 'direction'> &
  Pick<HTMLAttributes<HTMLDivElement>, 'onClick' | 'onKeyDown' | 'role' | 'id' | 'tabIndex'>

export type FlexProps = PropsWithChildren<
  CustomFlexProps &
  LayoutProps &
  SpaceProps &
  FlexboxProps &
  PositionProps &
  ZIndexProps &
  GridColumnProps &
  BackgroundProps &
  WidthProps &
  HeightProps &
  BorderProps &
  ColorProps
  >

export const Flex: FC<FlexProps> = styled.div<FlexProps>`
  display: flex;
  min-width: 0;
  ${position}
  ${zIndex}
  ${space}
  ${layout}
  ${flexbox}
  ${gridColumn}
  ${background}
  ${width}
  ${height}
  ${border}
  ${color}
`
