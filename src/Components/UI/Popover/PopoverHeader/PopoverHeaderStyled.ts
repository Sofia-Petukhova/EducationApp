import styled from 'styled-components'
import { Color } from '../../../../Utils/Constans'
import { remCalc } from '../../../../Utils/RemCalc'

export const Container = styled.div`
  background: ${Color.lightGrey};
  min-width: ${remCalc(232)};
  width: 100%;
  height: ${remCalc(120)};
  box-shadow: 0 ${remCalc(4)} ${remCalc(6)} rgba(0, 0, 0, 0.06);
  border-radius: 0 0 ${remCalc(14)} ${remCalc(14)};
  padding-top: ${remCalc(12)};

  &:hover {
    cursor: pointer;
  }
`

export const WrapperItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${remCalc(54)};
  padding: ${remCalc(12)} ${remCalc(16)} ${remCalc(18)};

  &:hover {
    background: ${Color.blueWhite};
  }

  &:last-child {
    border-radius: 0 0 ${remCalc(14)} ${remCalc(14)};
  }
`

export const Title = styled.span`
  margin-left: ${remCalc(10)};
  font-weight: 500;
  font-size: ${remCalc(17)};
  line-height: 130%;
  color: ${Color.black};
`
