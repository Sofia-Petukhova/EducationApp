import React, { FC } from 'react'
import { Color } from '../../../Utils/Constans'

type InfoProps = {
  width?: string,
  height?: string,
  color?: string,
}

const Info: FC<InfoProps> = ({
  width = '24',
  height = '24',
  color = Color.neonBlue,
}) => (
  <svg width={width} height={height} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z' stroke={color} strokeWidth='1.7' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 16V12' stroke={color} strokeWidth='1.7' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 8H12.01' stroke={color} strokeWidth='1.7' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export default Info
