import React, { FC } from 'react'
import { Color } from '../../../Utils/Constans'

type NewsProps = {
  width?: string,
  height?: string,
  color?: string,
}

const News: FC<NewsProps> = ({
  width = '18',
  height = '24',
  color = Color.blue,
}) => (
  <svg width={width} height={height} viewBox='0 0 18 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M16.2068 0.17C15.9424 0.0364529 15.6459 -0.0202246 15.351 0.00641475C15.056 0.0330541 14.7744 0.141941 14.5383 0.320688L6.52465 6.33036C6.42818 6.40271 6.34988 6.49653 6.29596 6.60438C6.24203 6.71224 6.21395 6.83117 6.21395 6.95175V15.4959H2.70307C2.39831 15.4955 2.10615 15.3743 1.89065 15.1588C1.67515 14.9433 1.5539 14.6511 1.55349 14.3464V8.87808C1.5539 8.57331 1.67515 8.28115 1.89065 8.06565C2.10615 7.85015 2.39831 7.72891 2.70307 7.72849H3.88372C4.08973 7.72849 4.28729 7.64666 4.43296 7.50099C4.57863 7.35532 4.66046 7.15776 4.66046 6.95175C4.66046 6.74575 4.57863 6.54818 4.43296 6.40251C4.28729 6.25684 4.08973 6.17501 3.88372 6.17501H2.70307C1.98642 6.17583 1.29936 6.46088 0.792619 6.96763C0.285873 7.47437 0.000822314 8.16143 0 8.87808V14.3464C0.000822314 15.063 0.285873 15.7501 0.792619 16.2568C1.29936 16.7635 1.98642 17.0486 2.70307 17.0494H6.9907C7.1967 17.0494 7.39427 16.9676 7.53994 16.8219C7.6856 16.6763 7.76744 16.4787 7.76744 16.2727V7.34012L15.5349 1.59222L15.4696 21.6198L9.7994 17.2087C9.63666 17.0822 9.43033 17.0255 9.22582 17.0511C9.0213 17.0768 8.83534 17.1826 8.70885 17.3454C8.58237 17.5081 8.52571 17.7144 8.55135 17.9189C8.57698 18.1235 8.68282 18.3094 8.84556 18.4359L14.5158 22.8463C14.7511 23.0293 15.033 23.1427 15.3294 23.1736C15.6259 23.2044 15.9251 23.1515 16.1931 23.0209C16.461 22.8902 16.6869 22.6871 16.8452 22.4345C17.0035 22.1818 17.0877 21.8899 17.0884 21.5918V1.5961C17.0894 1.29975 17.0073 1.00905 16.8515 0.756971C16.6957 0.504897 16.4723 0.301548 16.2068 0.17Z' fill={color} />
  </svg>
)

export default News