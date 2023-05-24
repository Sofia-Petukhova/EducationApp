import React, { FC } from 'react'
import { Color } from '../../../Utils/Constans'

type DownArrowProps = {
  width?: string,
  height?: string,
  color?: string,
}

const DownArrow: FC<DownArrowProps> = ({
  width = '14',
  height = '8',
  color = Color.blue,
}) => (
  <svg width={width} height={height} viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M1 1L7 7L13 1' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export default DownArrow
