import styled, { keyframes } from 'styled-components'
import { Color } from '../../../Utils/Constans'

type SpinContainerProps = {
  width?: string,
  height?: string
}

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(45deg);
  }
  50% {
    transform: rotate(90deg);
  }
  75% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SpinContainer = styled.div<SpinContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Color.white};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border-radius: 50%;
  animation: ${rotate} 1.5s linear infinite;
`
