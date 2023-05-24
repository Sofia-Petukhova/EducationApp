import React, { FC } from 'react'
import { Color } from '../../../Utils/Constans'

type CrossProps = {
  width?: string,
  height?: string,
  color?: string,
  onClick?: () => void,
}

const Cross: FC<CrossProps> = ({
  width = '24',
  height = '24',
  color = Color.white,
  onClick = () => {},
}) => (
  <svg width={width} height={height} onClick={onClick} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M20 4L4 20' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M4 4L20 20' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>

)

export default Cross
