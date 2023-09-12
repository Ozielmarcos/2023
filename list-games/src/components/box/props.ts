import { ReactNode } from "react"

export interface BoxBaseProps {
  $width?: string
  $height?: string
  $margin?: string
  $padding?: string
  $backgroundColor?: string
  $borderRadius?: string
  $boxSizing?: string
  $display?: 'flex' | 'block' | 'grid'
  $flexDirection?: 'row' | 'column'
  $alignItems?: 'center' | 'flex-start' | 'flex-end' | 'end'
  $justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly'
  $rowGap?: string
  $columnGap?: string
}

export interface BoxProps {
  width?: string
  height?: string
  margin?: string
  padding?: string
  bg?: string
  borderRadius?: string
  boxSizing?: string
  display?: 'flex' | 'block' | 'grid'
  direction?: 'row' | 'column'
  align?: 'center' | 'flex-start' | 'flex-end' | 'end'
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly'
  rowGap?: string
  columnGap?: string
  children?: ReactNode
}