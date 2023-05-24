import React, { FC } from 'react'
import { Color } from '../../../Utils/Constans'

type LogoLoadingProps = {
  width?: string,
  height?: string,
  color?: string,
}

const LogoLoading: FC<LogoLoadingProps> = ({
  width = '242',
  height = '242',
  color = Color.blue,
}) => (
  <svg width={width} height={height} viewBox='0 0 242 242' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M206.34 35.2575C159.256 -11.7525 82.7439 -11.7525 35.6595 35.2575C12.4635 58.0713 0.692418 87.7982 0 117.871V118.216C0 119.599 0 120.636 0 122.019C0 121.327 0 120.982 0 120.29C0 130.66 1.03863 141.03 3.8083 151.4C20.7725 216.039 86.5522 254.753 151.293 238.161C181.76 230.211 206.34 211.545 222.266 187.003H221.92C207.379 207.743 185.914 223.643 159.256 230.557C100.401 245.766 40.1602 210.508 24.927 151.746C22.1574 140.339 21.1187 129.278 21.4649 118.216H26.3119C25.9657 127.204 27.0043 136.537 29.4278 145.524C43.2761 198.41 97.2847 229.865 149.908 216.385C169.296 211.545 185.568 200.83 198.031 187.003C182.106 201.867 160.987 211.2 137.445 211.2C112.172 211.2 89.3219 200.484 73.0501 183.547C72.7039 183.201 72.3577 182.855 72.3577 182.855C72.0114 182.51 71.6652 182.164 71.6652 181.818C62.6638 171.794 55.3934 159.35 51.9313 145.178C49.5079 136.191 48.8154 127.204 49.5079 118.216H55.0472C54.701 125.821 55.3934 133.426 57.4707 141.03C67.8569 181.473 109.402 206.015 149.908 195.299C156.833 193.571 163.411 190.806 169.296 187.003H167.911C159.948 190.46 150.947 192.534 141.946 192.534C105.594 192.534 76.1659 163.153 76.1659 126.858C76.1659 123.747 76.5122 120.982 76.8584 118.216H94.1688H165.142H188.338H220.881H242C240.961 88.1439 229.19 58.0713 206.34 35.2575ZM38.4292 114.414C40.8526 102.316 46.392 90.5635 55.7396 81.2306C80.6667 56.3429 121.519 56.3429 146.446 81.2306C153.024 87.7982 157.871 95.4028 160.641 103.353L38.4292 114.414ZM165.834 71.5521C136.06 41.8251 88.2833 41.8251 58.5093 71.5521C46.392 83.6503 39.4678 98.8594 37.3906 114.76L17.6567 116.488C20.0801 97.8224 28.3891 79.5023 42.9299 65.3302C77.5508 30.7639 133.637 30.7639 168.258 65.3302C178.644 75.7 185.914 87.7982 190.069 100.933L184.529 101.279C180.721 90.5635 174.489 80.1936 165.834 71.5521ZM212.918 98.8594C208.764 82.2676 200.109 66.7128 186.953 53.5776C148.177 14.8635 85.1674 14.8635 46.0458 53.5776C28.3891 71.2064 19.0415 93.6745 17.3104 116.488L6.23176 117.525L0 117.871C1.38484 91.6005 12.1173 66.0215 32.1974 45.9731C75.1273 2.7653 145.062 2.7653 188.338 45.9731C203.225 60.8366 212.918 79.1566 217.419 98.5137L212.918 98.8594Z' fill={color} />
  </svg>
)

export default LogoLoading
