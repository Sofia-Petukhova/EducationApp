import styled, { FlattenSimpleInterpolation } from 'styled-components'
import { Color } from '../../../Utils/Constans'
import { remCalc } from '../../../Utils/RemCalc'

type ButtonStyledProps = {
  css?: FlattenSimpleInterpolation,
  isCancel: boolean,
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ isCancel }) => isCancel ? `${Color.lightGrey}` : `${Color.blue}`};
  height: ${remCalc(52)};
  width: ${remCalc(220)};
  border: ${remCalc(1)} solid ${Color.white};
  border-radius: ${remCalc(14)};
  font-size: ${remCalc(17)};
  color: ${({ isCancel }) => isCancel ? `${Color.graphite}` : `${Color.white}`};

  &:hover {
    background: ${({ isCancel }) => isCancel ? `${Color.cloud}` : `${Color.purpleLight}`};
    color: ${({ isCancel }) => isCancel ? `${Color.graphite}` : `${Color.white}`};
  }

  &:active {
    background: ${({ isCancel }) => isCancel ? `${Color.graphite}` : `${Color.blueDark}`};
    color: ${({ isCancel }) => isCancel ? `${Color.black}` : `${Color.white}`};
  }

  &:disabled {
    background: ${Color.grey};
    color: ${Color.white};
    cursor: not-allowed;
  }

  ${({ css }) => css};
`
