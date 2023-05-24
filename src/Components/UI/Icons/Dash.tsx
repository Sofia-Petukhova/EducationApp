import React, { FC } from 'react'
import { Color } from '../../../Utils/Constans'

type DashProps = {
  width?: string,
  height?: string,
  color?: string,
}

const Dash: FC<DashProps> = ({
  width = '30',
  height = '4',
  color = Color.black,
}) => (
  <svg width={width} height={height} viewBox='0 0 30 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M30 0.399857V3.15909H0V0.399857H30Z' fill={color} />
  </svg>

)

export default Dash
