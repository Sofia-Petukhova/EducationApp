import React, { FC } from 'react'
import { Color } from '../../../Utils/Constans'

type PlusProps = {
  width?: string,
  height?: string,
  color?: string,
}

const Plus: FC<PlusProps> = ({
  width = '128',
  height = '128',
  color = Color.grey,
}) => (
  <svg width={width} height={height} viewBox='0 0 128 128' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path fillRule='evenodd' clipRule='evenodd' d='M61.1909 0C58.9818 0 57.1909 1.79086 57.1909 4V57.1915H4C1.79086 57.1915 0 58.9823 0 61.1915V66.8085C0 69.0176 1.79086 70.8085 4 70.8085H57.1909V124C57.1909 126.209 58.9818 128 61.1909 128H66.8079C69.0171 128 70.8079 126.209 70.8079 124V70.8085H124C126.209 70.8085 128 69.0177 128 66.8085V61.1915C128 58.9823 126.209 57.1915 124 57.1915H70.8079V4C70.8079 1.79086 69.0171 0 66.8079 0H61.1909Z' fill={color} />
  </svg>

)

export default Plus
