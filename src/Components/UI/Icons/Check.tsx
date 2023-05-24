import React, { FC } from 'react'
import { Color } from '../../../Utils/Constans'

type CheckProps = {
  width?: string,
  height?: string,
  color?: string,
}

const Check: FC<CheckProps> = ({
  width = '156',
  height = '156',
  color = Color.blue,
}) => (
  <svg width={width} height={height} viewBox='0 0 156 156' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path fillRule='evenodd' clipRule='evenodd' d='M78 156C121.078 156 156 121.078 156 78C156 34.9218 121.078 0 78 0C34.9218 0 0 34.9218 0 78C0 121.078 34.9218 156 78 156ZM128.556 48.9042C130.712 46.388 130.42 42.6002 127.904 40.444C125.388 38.2878 121.6 38.5796 119.444 41.0958L67.1071 102.17L44.2471 79.2618C41.9064 76.9162 38.1074 76.9122 35.7618 79.2529C33.4162 81.5936 33.4122 85.3925 35.7529 87.7382L63.195 115.238C64.3763 116.422 65.9982 117.059 67.6695 116.996C69.3408 116.932 70.9098 116.174 71.9981 114.904L128.556 48.9042Z' fill={color} />
  </svg>
)

export default Check
