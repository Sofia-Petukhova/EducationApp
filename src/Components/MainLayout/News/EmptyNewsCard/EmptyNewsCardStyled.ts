import styled from 'styled-components'
import { remCalc } from '../../../../Utils/RemCalc'
import { Color } from '../../../../Utils/Constans'

export const Container = styled.div`
  width: ${remCalc(420)};
  height: ${remCalc(260)};
  padding: ${remCalc(20)};
  border-radius: ${remCalc(14)};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Color.lightGrey};
  transition: 0.5s;
  z-index: 10;
  
  &:hover {
    cursor: pointer;
    transform: scale(0.93);
  }
`
