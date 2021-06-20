import { CSSProperties, FC, HTMLAttributes, MutableRefObject } from 'react'
import styled from 'styled-components'
import {
  color,
  typography,
  style,
  space,
  fontSize,
  textAlign,
  SpaceProps,
  FontSizeProps,
  FontStyleProps,
  SizeProps,
  TextStyleProps,
  LetterSpacingProps,
  FontFamilyProps,
  FontWeightProps,
  LineHeightProps,
  TextAlignProps,
  ColorProps,
  background,
  BackgroundProps,
} from 'styled-system'

type CustomTextProps = Pick<CSSProperties, 'textTransform' | 'textDecoration' | 'whiteSpace' | 'direction'> &
  Pick<HTMLAttributes<unknown>, 'id' | 'onMouseEnter' | 'onMouseLeave' | 'onClick'> & {
  ref?: MutableRefObject<unknown | null>
}

export type TextProps = CustomTextProps &
  SpaceProps &
  FontSizeProps &
  FontStyleProps &
  SizeProps &
  TextStyleProps &
  LetterSpacingProps &
  FontFamilyProps &
  FontWeightProps &
  LineHeightProps &
  TextAlignProps &
  ColorProps &
  BackgroundProps

const whiteSpace = style({
  cssProperty: 'white-space',
  prop: 'whiteSpace',
})

const textDecoration = style({
  cssProperty: 'text-decoration',
  prop: 'textDecoration',
})

const textTransform = style({
  cssProperty: 'text-transform',
  prop: 'textTransform',
})

const direction = style({
  cssProperty: 'direction',
  prop: 'direction',
})

export const Text: FC<TextProps> = styled.span.attrs(() => ({ role: 'text' }))<TextProps>`
  display: inline-block;
  line-height: ${({ theme }) => theme.fonts?.defaultLineHeight};
  font-size: ${({ theme }) => theme.fonts?.defaultFontSize};
  max-width: 100%;
  ${space}
  ${background}
  ${fontSize}
  ${typography}
  ${whiteSpace}
  ${textDecoration}
  ${textTransform}
  ${color}
  ${textAlign}
  ${direction}
`
