import styled from 'styled-components'
import {
  grid,
  alignItems,
  justifyContent,
  padding,
  margin,
  width,
  border,
  background,
  color,
  position,
  GridProps as GridPropsAlias,
  AlignItemsProps,
  JustifyContentProps,
  PaddingProps,
  MarginProps,
  WidthProps,
  BorderProps,
  BackgroundProps,
  ColorProps,
  PositionProps,
} from 'styled-system'
import { FC } from 'react'

export type GridProps = GridPropsAlias &
  AlignItemsProps &
  JustifyContentProps &
  PaddingProps &
  MarginProps &
  WidthProps &
  BorderProps &
  BackgroundProps &
  ColorProps &
  PositionProps

export const Grid: FC<GridProps> = styled.div.attrs(({ gridGap = 9, gridRowGap = 9 }: GridProps) => ({
  gridGap,
  gridRowGap,
}))`
  display: grid;
  width: 100%;
  grid-template-columns: 100%;
  ${grid}
  ${alignItems}
  ${justifyContent}
  ${padding}
  ${margin}
  ${width}
  ${border}
  ${background}
  ${color}
  ${position}
`
